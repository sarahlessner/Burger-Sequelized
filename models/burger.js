
module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("burger", {
    name: {
      type: DataTypes.STRING,
      // validate: {
      //   allowNull: false,
      //   len: [1,100]
      // }
    }, 
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Burger;
};

// module.exports = function (sequelize, DataTypes) {
//   return sequelize.define("consumer", {
//     name: DataTypes.STRING,
//     rating: DataTypes.INTEGER
//   });
// }

