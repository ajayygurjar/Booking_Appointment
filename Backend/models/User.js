const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const User = sequelize.define("User", {
     id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    number: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

// Creates the table if it does NOT exist
User.sync();

module.exports = User;
