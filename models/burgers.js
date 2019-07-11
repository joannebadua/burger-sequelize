module.exports = function(sequalize, DataTypes) {
var burgers = sequelize.define("burgers", {
    text: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
});
return burgers;
};