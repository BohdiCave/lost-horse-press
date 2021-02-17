const db = require("../models");

// Defining methods for the cartController
module.exports = {
  findOne: function(req, res) {
    db.Cart
      .findOne({where: { userId: req.params.id }})
      .then(cart => {
        if(cart && cart.total_qty) {
          res.json(cart);
        } else {
          res.json(null);
        }
      })
      .catch(err => res.status(500).json(err));
  },
  create: function(req, res) {
    const prodId = req.body.prodId.prodId;
    const prodQty = req.body.prodQty;
    const userId = req.params.id;
    let price, title, desc, cat;
    db.Cart.create({
      total: 0, 
      total_qty: 0,
      UserId: userId
    })
    .then(cart => {
      db.Book.findOne({where: {id: prodId}})
        .then(book => {
          price = book.price_us;
          title = book.title;
          desc = book.author;
          cat = book.genre;
        })
      return (price, title, desc, cat, cart);
    })
    .then((price, title, desc, cat, cart) => { 
      db.Item.create({
        productId: prodId, 
        title: title, 
        desc: desc,
        cat: cat,
        qty: prodQty, 
        price: price,
        date_add: Date.now(),
      })
      .then(item => {
        item.qty += prodQty;
        cart.total_qty += prodQty;
        cart.total += prodQty*itemPrice;
        return res.send([cart, item]);
      })
    })
    .catch(err => console.log(err));
  },
  destroy: function(req, res) {
    const prodId = req.params.itemId;
    const userId = req.params.userId;
    db.Cart
      .findOne({where: { userId: userId }})
      .then(cart => {
        db.Item
          .findOne({where: { id: prodId }})
          .then(item => {
            cart.total -= item.price*item.qty;
            cart.total_qty -= item.qty;
            return item;
          })
          .then(item => item.destroy())
          .then(item => res.json(item))
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.json(err));
  }
};