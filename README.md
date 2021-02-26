# Lost Horse Press

![GNU GPL 3.0](https://img.shields.io/badge/license-GNU%20GPL%203.0-darkred)

A full-stack MERN app using MySQL database with Sequelize, Node and Express on the backend, and React and Redux on the frontend.

## USER stories

AS A USER,
I WANT to visit this website,
ENJOY an aesthetically pleasant experience,
and FIND the information I’m interested in,
potentially PLACING AN ORDER.

AS A PUBLISHER,
I NEED to have an accessible website,
to POST updates (events, new releases)
and MANAGE my CATALOG and ORDERS without much trouble.

## Technologies Used

- BACKEND
  - Shorthand: MERN / MVC
  - Longhand:

    ![Backend Dependencies](./client/public/assets/images/screenshots/backend-dependencies.png)
  - Validation and authentication
    - bCrypt
    - Passport
    - JWT / Passport-JWT
    - Validator / if-empty
  - API routing - Axios
  - Server - Node / Express
  - Database - MySQL2 / Sequelize
  - Payments - Stripe (to be implemented)
- FRONTEND
  - Shorthand: React / Redux
  - Longhand:

    ![Frontend Dependencies](./client/public/assets/images/screenshots/frontend-dependencies.png)
  - API - again, Axios
  - Authentication - JWT-decode
  - React libraries:
    - Animations (for landing page)
    - Foundation (for CSS framework)
    - Icons / Styled components (for sitemap modal and styling)
  - Redux libraries:
    - Redux / React-redux
    - Middleware: Redux-thunk / Prop-types

## Screenshot - Before

![Screenshot](./client/public/assets/images/screenshots/lost-horse-press_old-site.png)

## Screenshots - After

![Screenshot - Landing](./client/public/assets/images/screenshots/lost-horse-press_landing.png)

![Screenshot 1](./client/public/assets/images/screenshots/lost-horse-press_showcase.png)

### Full responsiveness

![Screenshot - Mobile](./client/public/assets/images/screenshots/lost-horse-press_mobile-about-pg.png)

## Links

- Current (old) website: [http://losthorsepress.org](http://losthorsepress.org)
- Deployed interim redevelopment project: [https://young-chamber-12240.herokuapp.com/](https://young-chamber-12240.herokuapp.com)
