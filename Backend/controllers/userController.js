const User = require("../models/User");

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      success: true,
      users: users
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Database Error"
    });
  }
};

// Add new user (appointment)
const addUser = async (req, res) => {
  try {
    const { name, email, number } = req.body;
    const user = await User.create({ name, email, number });

    res.status(201).json({
      success: true,
      message: `User with name: ${user.name} is created`,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        number: user.number
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Unable to create user"
    });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await User.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "User is deleted"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error encountered while deleting"
    });
  }
};

module.exports = {
  addUser,
  deleteUser,
  getUsers
};