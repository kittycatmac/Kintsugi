module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('UserSchema', {
        user_ID: { 
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        Bio: DataTypes.STRING,
        badges: DataTypes.STRING,
        study_cards: DataTypes.STRING
    }, {
        timestamps: false,
        freezeTableName: true
    });
    return User;
};

