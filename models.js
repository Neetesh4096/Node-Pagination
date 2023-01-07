const Sequelize = require("sequelize");
/////Database
const sequelize = new Sequelize("page", "root", "falana", {
  dialect: "mysql",
  host: "localhost",
});

sequelize
  .sync()
  .then((result) => {
    console.log("Success");
  })
  .catch((err) => {
    console.log(err);
  });

/////Database Model
const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    min: 10,

    unique: true,
  },
});

module.exports = User;
