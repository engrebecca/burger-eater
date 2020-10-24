var express = require("express");
const burger = require("../models/burger.js");

var router = express.Router();

// Import the model to use its database functions.
var cat = require("../models/burger.js");

// Route for getting all burgers from database
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var newObj = {
            burgers: data
        };
        console.log(newObj);
        res.render("index", newObj);
    });
});

// Route for adding a burger to the database
router.post("/api/burgers", function (req, res) {
    console.log(req.body.name);
    burger.insertOne([req.body.name], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

// Route for updating a burger in the database to be "devoured"
router.put("/api/burgers/:id", function (req, res) {
    var burgerId = req.params.id;
    var isDevoured = req.body.burgerEaten;

    console.log(burgerId);
    console.log(isDevoured);

    burger.updateOne(burgerId, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;