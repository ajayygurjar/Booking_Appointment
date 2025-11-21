const {Sequelize}=require('sequelize');

const sequelize = new Sequelize("project", "root", "Ajay@2529", {
    host: "localhost",
    dialect: "mysql"
});


(async ()=>{
try {
    await sequelize.authenticate()
    console.log(`Connection has been created`);
} catch (error) {
    console.log("Database connection error:", error);
    
}
})();
module.exports = sequelize;