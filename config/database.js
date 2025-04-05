const { Sequelize } = require("sequelize");
require("dotenv").config();

let env = process.env

const sequilize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
    host: env.DB_HOST,
    dialect: 'postgres',
    port: env.DB_PORT,
    logging: false
})

module.exports = sequilize;