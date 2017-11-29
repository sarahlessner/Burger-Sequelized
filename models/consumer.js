module.exports = function (sequelize, DataTypes) {
  var Consumer = sequelize.define("consumer", {
    customer: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [2,25]
      }
    }, 
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
  return Consumer;
};