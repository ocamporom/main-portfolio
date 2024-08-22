import { Router } from 'express';
import * as routes from '../routes/index.js';

function configureRoutes(app) {
  const router = new Router();
  const iterableRoutes = Object.values(routes);

  iterableRoutes.forEach((route) => {
    route(router);

    app.use('', router);
  });
}

export default configureRoutes;
