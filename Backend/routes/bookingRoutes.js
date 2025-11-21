const express=require('express');
const routes=express.Router();
const userController = require("../controllers/userController");


routes.post('/add',userController.addUser);
routes.get('/get',userController.getUsers);
routes.delete('/delete/:id',userController.deleteUser);

module.exports = routes;