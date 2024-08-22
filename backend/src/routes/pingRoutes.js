function pingRoutes(router) {
  router.get('/ping', (req, res) => {
    res.status(200).json({
      message: 'PONG',
    });
  });
}

export default pingRoutes;
