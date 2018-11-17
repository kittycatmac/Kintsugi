module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('UserSchema', {
        user_ID: { 
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        Bio: {
            type: DataTypes.STRING,
            allowNull: true
        },
        badges: {
            type: DataTypes.STRING,
            allowNull: true
        },
        study_cards: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });
    return User;
};

