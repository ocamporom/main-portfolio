import 'dotenv/config';
import express from 'express';
import process from 'node:process';
import configureDatabase from './src/config/database.js';
import configureMiddleware from './src/config/middleware.js';
import configureRoutes from './src/config/routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('port', PORT);

// Configure the database
await configureDatabase(app);

// Configure your Pre Middleware here
configureMiddleware(app, 'thirdParty');
configureMiddleware(app, 'main');

// Add your routes here
configureRoutes(app);

// Configure your Post Middleware here
configureMiddleware(app, 'post');

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
