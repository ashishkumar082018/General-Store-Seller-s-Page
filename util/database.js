const Sequelize = require("sequelize");

const sequelize = new Sequelize("general-store-seller-dashboard", "root", "Ashish@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
