import express from 'express';
import routes from './routes';

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
app.use(routes);

// Start the API server
db.sequelize.sync({force: false}).then(() => {
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server listening on PORT ${PORT}!`);
  });
});