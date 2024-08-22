// Import all middleware functions from the middlewares directory
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import * as m from '../middlewares/index.js';

// Configure your middleware here. Order is important
const middlewares = {
  thirdParty: [bodyParser.json(), cors(), helmet(), morgan('combined')],
  main: [m.loggerMiddleware, m.requestMiddleware],
  post: [m.notFoundMiddleware, m.errorHandlingMiddleware],
};

function configureMiddleware(app, group = 'main') {
  const loadedMiddlewares = middlewares[group];

  if (!loadedMiddlewares) {
    throw new Error(`No defined middleware group [${group}]`);
  }

  loadedMiddlewares.forEach((middleware) => {
    // console.log(`Middleware (${group}): `, middleware.name);
    app.use(middleware);
  });
}

export default configureMiddleware;
