var connection = require("../config/connection.js");


let orm = {

    // selectAll() method
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    // insertOne() method
    insertOne: function (tableName, colName, newValue, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableName, colName, newValue], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    // updateOne() method
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