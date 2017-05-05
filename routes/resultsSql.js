var express = require('express');

var router = express.Router();


//get list of product

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


//get product by id

// router.get('/:id', function(req, res, next) {

//    pool.getConnection(function(err, connection) {

//        var id = req.params.id;

//        connection.query("SELECT * FROM products WHERE id='" + id + "' LIMIT 1", function(err, rows) {

//            if (!err && rows.length > 0) {

//                res.json(rows[0]);

//            } else {

//                res.json([]);

//            }

//        });

//    });

// });


// //add new product

// router.post('/', function(req, res, next) {

//    pool.getConnection(function(err, connection) {

//        var postBody = req.body;

//        var productName = postBody.name;

//        var productPrice = postBody.price;

//        connection.query("INSERT INTO products (name, price) VALUES ('" + productName + "','" + productPrice + "')", function(err, rows) {

//            if (rows.affectedRows) {

//                connection.query("SELECT * FROM products WHERE id='" + rows.insertId + "' LIMIT 1", function(err, rows) {

//                    if (!err && rows.length > 0) {

//                        res.json(rows[0]);

//                    } else {

//                        res.json([]);

//                    }

//                });

//            }

//        });

//    });

// });


// //delete product

// router.delete('/:id', function(req, res, next) {

//    pool.getConnection(function(err, connection) {

//        var id = req.params.id;

//        connection.query("DELETE FROM products WHERE id='" + id + "'", function(err, rows) {

//            if (!err) {

//                res.json({

//                    "status": true

//                });

//            } else {

//                res.json([]);

//            }

//        });

//    });

// });


// //update product

// router.put('/:id', function(req, res, next) {

//    pool.getConnection(function(err, connection) {

//        var postBody = req.body;

//        var productId = req.params.id;

//        var productName = postBody.name;

//        var productPrice = postBody.price;

//        connection.query("UPDATE products SET name='" + productName + "', price='" + productPrice + "' WHERE id='" + productId + "'", function(err, rows) {

//            if (rows.affectedRows) {

//                connection.query("SELECT * FROM products WHERE id='" + productId + "' LIMIT 1", function(err, rows) {

//                    if (!err && rows.length > 0) {

//                        res.json(rows[0]);

//                    } else {

//                        res.json([]);

//                    }

//                });

//            }

//        });

//    });

// });


module.exports = router;