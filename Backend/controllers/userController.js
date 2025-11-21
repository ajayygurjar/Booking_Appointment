const User = require("../models/User");


//Get Request -fetching users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      success: true,
      users: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Database Error",
    });
  }
};

//Post Request -adding user

const addUser = async (req, res) => {
  try {
    const { name, email, number } = req.body;
    const users = await User.create({ name, email, number });
    res.status(200).json({
      success: true,
      users: {
        id: users.id,
        name: users.name,
        email: users.email,
        number: users.number,
      },
    });
  } catch (error) {
    res.status(500).json({
        success:false,
        message:'Database Error'
    })
  }
};

const deleteUser=async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
}


module.exports = {
  addUser,
  deleteUser,
  getUsers
};