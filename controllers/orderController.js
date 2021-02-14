const db = require("../models");
const config = require("../config/keys");
const item = require("../models/item");
const stripe = require("stripe")(config.get("StripeAPIKey"));

// Defining methods for the postsController
module.exports = {
  findAll: function(req, res) {
    db.Order
      .findAll({where: {id: req.params.id}})
      .then(orders => res.json(orders))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const {source} = req.body; // payments via Stripe (npm install stripe; stripeAPIKey into config - keys file?)
    db.User
      .findOne({where: {id: req.params.id}})
      .then(user => {
          let receipt_email = user.user_email;
          db.Cart
            .findOne({where: {userId: user.id}})
            .then(cart => {
                const charge = stripe.charges.create({
                    amount: cart.total,
                    currency: 'usd',
                    source: source,
                    receipt_email: receipt_email
                })
                if (!charge) {
                  throw Error("Payment failed");
                } else if (charge) {
                  db.Item
                    .findAll({where: {cartId: cart.id}})
                    .then(items => {
                      db.Order
                        .create({
                          userId: user.id,
                          total: cart.total,
                          total_qty: items.length
                        })
                        .then(order => {
                          db.Item.update({orderId: order.id},{where: {cartId: cart.id}})
                                 .then(items => res.json(items))
                                 .catch(err => res.json(err));
                          return order;
                        })
                        .then(order => {
                          cart.destroy()
                              .then(res => res.status(201).json(order))
                              .catch(err => res.json(err));
                        })
                        .catch(err => res.status(422).send("Order not created", res(err)));
                    })
                    .catch(err => res.json(err));
                }
            })
            .catch(err => res.status(500).send("Something went wrong", json(err)));
      })
      .catch(err => res.status(500).json(err));
  }
}