import User from '../../models/User.js';

async function getAllUsersController(req, res) {
  const users = await User.find({});

  res.status(200).json({
    data: users,
  });
}

export default getAllUsersController;
