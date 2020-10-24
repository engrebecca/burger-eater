// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    // Selects all burgers from the database
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // Adds a new burger to the database
    insertOne: function (newValue, cb) {
        orm.insertOne("burgers", "burger_name", newValue, function (res) {
            cb(res);
        });
    },
    // Updates a burger's devoured status
    updateOne: function (id, cb) {
        orm.updateOne("burgers", "devoured", true, id, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;