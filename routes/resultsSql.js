var express = require('express');

var router = express.Router();


//get list of types

router.get('/mainform', function(req, res, next) {

   connection.getConnection(function(err, connection) {

       connection.query("SELECT * FROM types", function(err, rows) {

           if (!err && rows.length > 0) {

               res.json(rows);

           } else {

               res.json([]);

           }

       });

   });

});




module.exports = router;