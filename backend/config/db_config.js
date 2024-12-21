const mysql = require('mysql');

const db = mysql.createConnection({
  host: '127.0.0.1',    
  user: 'root',   
  password:'veasna123', 
  database: 'test-mysql',
  port:'3307'
});

db.connect((err) =>{
    if(err){
        console.error('Error connecting to the database:', err.message);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = db;