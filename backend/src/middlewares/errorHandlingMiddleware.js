// eslint-disable-next-line no-unused-vars
function errorHandlingMiddleware(err, _, res, __) {
  console.error(err.stack);

  console.log(res);

  return res.status(err.status || 500).json({
    error: err?.message ?? 'Something went wrong',
  });
}

export default errorHandlingMiddleware;
