async function postSampleController(req, res) {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  await sleep(5000); // Delay for 5 seconds

  res.status(201).json({
    message: 'success',
    data: req.body,
  });
}

export default postSampleController;
