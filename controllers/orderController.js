const db = require("../models");
const config = require("config");
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
            .findOne({where: {userId: req.params.id}})
            .then(cart => {
                const charge = stripe.charges.create({
                    amount: cart.total,
                    currency: 'inr',
                    source: source,
                    receipt_email: receipt_email
                })
                if (!charge) {
                    throw Error("Payment failed");
                } else if (charge) {
                    db.Order
                      .create({
                        userId: req.params.id,
                        total: cart.total,
                        items: cart.items /* Need to create another DB query for Item table */
                      })
                      .then(order => {
                        cart.destroy()
                            .then(res => res.status(201).json(order))
                            .catch(err => res.json(err));
                      })
                      .catch(err => res.status(422).res(err));
                }
            })
            .catch(err => res.status(500).send("Something went wrong", json(err)));
      })
      .catch(err => res.status(500).json(err));
  }
}

/* 
1. Find the Cart and the User by using the userId provided. Get the email of the user.
2. Check whether the cart exists or not.
    - If there is no cart, send a response stating that the cart is empty.
3. Create a charge using Stripe
    - pass in the amount, the currency, the source object received from frontend, and receipt_email
    - if unsuccessful, throw an error stating payment failed
    - if successful, create a) new order userId, b) items < cart’s items and c) the bill < cart’s bill.
4. Delete the cart < cart’s id, and then send the order as a response to the frontend. 
*/