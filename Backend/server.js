const express = require("express");
const app = express();
const sequelize = require("./utils/db-connection.js");
app.use(express.json());




sequelize.sync({ alter: true }).then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});
