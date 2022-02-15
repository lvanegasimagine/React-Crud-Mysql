import {Sequelize} from 'sequelize';

const db = new Sequelize('database_app', 'root', 'Corea*19', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

export default db;