
module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("burger", {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [5,75]
      }
    }
  });
  return Burger;
};



