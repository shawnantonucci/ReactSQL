const express = require("express");
const cors = require("cors");
const db = require("./dbconnection"); //reference of dbconnection.js
const bodyParser = require("body-parser");
const app = express();

const SELECT_ALL_PRODUCTS = "SELECT * FROM products";
const INSERT_PRODUCT = "INSERT INTO products ";

// console.log(connection)

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

// Retrieve all products
app.get("/products", function(req, res) {
    db.query("SELECT * FROM products", function(error, results, fields) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results,
            message: "products list."
        });
    });
});

// Retrieve product with id
app.get("/product/:id", function(req, res) {
    let product_id = req.params.id;
    if (!product_id) {
        return res
            .status(400)
            .send({ error: true, message: "Please provide products_id" });
    }
    db.query("SELECT * FROM products where id=?", product_id, function(
        error,
        results,
        fields
    ) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results[0],
            message: "product list."
        });
    });
});

// Add a new product
app.post("/product", function(req, res) {
    let name = req.body.name;
    if (!name) {
        return res
            .status(400)
            .send({ error: true, message: "Please provide name" });
    }
    db.query("INSERT INTO products SET ? ", { name: name }, function(
        error,
        results,
        fields
    ) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results,
            message: "New name has been created successfully."
        });
    });
});

//  Update product with id
app.put("/product/:id", function(req, res) {
    let product_id = req.params.id;
    let name = req.body.name;
    if (!product_id || !name) {
        return res.status(400).send({
            error: name,
            message: "Please provide name and product_id"
        });
    }
    db.query(
        "UPDATE products SET name = ? WHERE id = ?",
        [name, product_id],
        function(error, results, fields) {
            if (error) throw error;
            return res.send({
                error: false,
                data: results,
                message: "name has been updated successfully."
            });
        }
    );
});

//  Delete product
app.delete("/product/:id", function(req, res) {
    let product_id = req.params.id;
    if (!product_id) {
        return res
            .status(400)
            .send({ error: true, message: "Please provide product_id" });
    }
    db.query("DELETE FROM products WHERE id = ?", [product_id], function(
        error,
        results,
        fields
    ) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results,
            message: "Product has been deleted successfully."
        });
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`\n---Running on ${port}----\n`));
