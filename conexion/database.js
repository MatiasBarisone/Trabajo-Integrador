const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('trailerflix', 'root', '15615913matias', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => {
        console.log('Connected to MySQL database using Sequelize');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
