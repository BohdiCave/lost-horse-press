// express router
const express = require('express');
const router = require('./routes');
const Sequelize = require('sequelize');
// auth via passport
const passport = require('passport');

// database 
let db;
if (process.env.JAWSDB_URL) {
  db = new Sequelize(process.env.JAWSDB_URL);
} else {
  db = require('./models')
}

//running express app
const app = express();
const PORT = process.env.PORT || 3001;
// middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes, both API and view
app.use(router);
app.use(passport.initialize());
require('./config/passport')(passport);

// static assets (on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Start the API server
if (process.env.JAWSDB_URL) {
  db.sync({force:false}).then(() => {
    app.listen(PORT, () => {
      console.log(`API server with JawsDB listening on PORT ${PORT}!`);
    });
  });
} else {
  db.sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
      console.log(`🌎 ==> API server listening on PORT ${PORT}!`);
    });
  });
}
