const db = require("../models");

// Defining methods for the postsController
module.exports = {
  findAll: function(req, res) {
    db.Article
      .findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    db.Article
      .findOne(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Article
      .findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  destroy: function(req, res) {
    db.Article
      .findOne({ id: req.params.id })
      .then(dbModel => dbModel.destroy())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};