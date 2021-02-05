const express = require('express');
const router = require('./routes');

const db = require('./models');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(router);

// Start the API server
db.sequelize.sync({force: false}).then(() => {
  app.listen(PORT, function() {
    console.log(`🌎 ==> API server listening on PORT ${PORT}!`);
  });
});