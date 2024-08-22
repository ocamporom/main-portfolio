import getAllUsersController from '../controllers/users/getAllUsersController.js';

function userRoutes(router) {
  router.get('/api/users', getAllUsersController);
}

export default userRoutes;
