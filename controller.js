'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi REST API Berjalan!", res);
}

//add file


exports.addFile = function(req, res){
    var nama = req.body.nama;
    var tanggal = req.body.tanggal;
    var image = req.file.path;

    connection.query('INSERT INTO ulangtahun (nama, tanggal, image) VALUES(?,?,?)',
        [nama, tanggal, image],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Berhasil menambahkan data!", res);
            }
        }
    );
};