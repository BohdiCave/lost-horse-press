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
    const {prodId, prodQty} = req.body;
    const userId = req.params.id;
    let itemPrice, itemTitle, itemDesc, itemCat;
    db.Book
      .findOne({where: {id: prodId}})
      .then(book => {
        itemPrice = book.price_us;
        itemTitle = book.title;
        itemDesc = book.author;
        itemCat = book.genre;
        return(itemPrice, itemTitle, itemDesc, itemCat);
      })
      .then(
        db.Cart
          .findOne({where: {userId: userId}})
          .then(cart => {
            db.Item
              .findOne({where: {title: itemTitle}})
              .then(item => {
                item.qty += prodQty;
                cart.total_qty += prodQty;
                cart.total += prodQty*itemPrice;
                return res.status(201).json(cart);
              })
              .catch(err => {
                db.Item
                  .create({
                    productId: prodId, 
                    title: itemTitle, 
                    desc: itemDesc,
                    cat: itemCat,
                    qty: prodQty, 
                    price: itemPrice
                  })
                  .then(item => {
                    res.json(item)
                    cart.total_qty += prodQty;
                    cart.total += prodQty*itemPrice;
                    return res.status(201).json(cart);                        
                  })
                  .catch(err => res.status(422).json(err));
                res.json(err);
              });
          })
          .catch(err => {
            db.Item
              .create({
                productId: prodId, 
                title: itemTitle, 
                desc: itemDesc,
                cat: itemCat,
                qty: prodQty, 
                price: itemPrice
              })
              .then(item => {
                db.Cart
                  .create({
                    total: itemPrice*prodQty, 
                    total_qty: prodQty,
                    itemId: item.id
                  })
                  .then(newCart => res.status(201).json(newCart))
                  .catch(err => res.status(422).json(err));
              })
              .catch(err => res.status(422).json(err));
            return res.json(err);
          })
      ).catch(err => res.status(404).send("Item not found!", err));          
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