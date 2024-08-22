// 💡 Feel free to remove this file
function loggerMiddleware(_, __, next) {
  console.log('Requesting ...');

  next(); // Call the next middleware
}

export default loggerMiddleware;
