const mysql = require('mysql2'); 

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bulletinboard'
});

connection.connect((err) => {
    if(err) console.error(err);
    console.log('mysql connection successful');
})

module.exports = connection;