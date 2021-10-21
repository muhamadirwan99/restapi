var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host:'47.254.250.3',
    user:'root',
    password:'',
    database:'ulangtahun',
    port: 3306,
    connectTimeout: 20000,
});

conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = conn;