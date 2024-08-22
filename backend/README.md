# Backend

## How To

This guide provides the guidelines for coding the backend of our application, specially focusing on how to add new routes.

### Adding Routes

Follow these steps to add new routes to the backend:

1. **Create a Route File:** Add a new file for your route in the `src/routes/` directory.
2. **Create a Function:** Define a function with a name ending in `Routes`.
3. **Function Definition:** This function should accept a `router` parameter, which represents an Express router instance.
4. **Implement the Route:** Write your route logic inside this function.

#### Example

Here's an example of how to create a new route:

```js
// Create a function that accepts a router parameter
function pingRoutes(router) {
  // Define the route logic inside the function
  router.get('/ping', (req, res) => {
    res.status(200).json({
      message: 'PONG',
    });
  });
}

export default pingRoutes;
```

### Integrating Routes

To use the route you created, you'll need to add the route to `src/routes/index.js` for better organization.

#### Example

```js
// routes/index.js
export { default as pingRoutes } from './pingRoutes.js';
```

### Creating Controller

Controllers are fucntions that handle HTTP requests, interact with the database through models, and send responses back to the client. They help keep your code modular and easy to maintain.

1. Navigate to the `src/controllers` folder in your project.
2. Create a new controller with name ending in `Controller`.
3. This function should accept a `req` (request) and `res` (response) parameters, which represents the Express Request and Response object.
4. Write your controller logic inside this function.

#### Example

Here's an example of how to create a new controller

```js
async function getAllUsersController(req, res) {
  const users = await User.find({})

  res.status(200).json({
    data: users,
  })
}

export default getAllUsersController;
```

> ❗ As per convention, use a separate controller for each action.
