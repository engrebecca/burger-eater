var connection = require("../config/connection.js");


let orm = {

    // Method of selecting all burgers from a table
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    // Method for inserting a new burger into a table
    insertOne: function (tableName, colName, newValue, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableName, colName, newValue], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    // Method for updating the devoured status of a burger
    updateOne: function (tableName, colName, newValue, id, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [tableName, colName, newValue, id], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

// Exports the orm object
module.exports = orm;