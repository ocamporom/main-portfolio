import createHttpError from 'http-errors';

function notFoundMiddleware(_, __, next) {
  next(createHttpError(404));
}

export default notFoundMiddleware;
