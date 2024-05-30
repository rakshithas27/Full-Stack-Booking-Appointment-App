const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userName: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    phoneNumber: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }
});

module.exports = User;