import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'exclude',
    password: 'password',
    database: 'manga'
})

export default connection;