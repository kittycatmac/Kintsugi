module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('UserSchema', {
        user_ID: DataTypes.STRING,
        Bio: DataTypes.STRING,
        badges: DataTypes.STRING,
        study_cards: DataTypes.STRING
    }, {
        timestamps: false,
    });
    return User;
};

