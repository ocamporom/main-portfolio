import getSampleController from '../controllers/sample/getSampleController.js';
import postSampleController from '../controllers/sample/postSampleController.js';

function sampleRoutes(router) {
  router.post('/api/sample', postSampleController);
  router.get('/api/sample', getSampleController);
}

export default sampleRoutes;
