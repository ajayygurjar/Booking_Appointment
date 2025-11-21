const express = require("express");
const cors = require("cors");
const app = express();
const sequelize = require("./utils/db-connection.js");
const userRoutes = require("./routes/bookingRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);


sequelize.sync({ alter: true }).then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});

