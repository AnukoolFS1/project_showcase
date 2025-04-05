const {Datatypes} = require("sequelize");
const db = require('../config/database');

const User = db.define('User', {
    id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    name: {
        type: Datatypes.STRING,
        allowNull: false
    },
    email: {
        type: Datatypes.STRING,
        allowNull: false,
        unique:true
    },
}, {
    timestamps: true
});

module.export = User;