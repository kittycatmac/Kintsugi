module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('UserSchema', {
        user_info: DataTypes.STRING,
        Bio: DataTypes.STRING,
        badges: DataTypes.STRING,
        study_cards: DataTypes.STRING
    }, {
        timestamps: false,
    });
    return User;
};

