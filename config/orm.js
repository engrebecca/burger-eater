var connection = require("../config/connection.js");


let orm = {

    // selectAll() method
    selectAll: function (tableName) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    // insertOne() method
    insertOne: function (tableName, valueName, newValue) {
        var queryString = "INSERT INTO ?? (?) VALUES ?";
        connection.query(queryString, [tableName, valueName, newValue], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    // updateOne() method
    updateOne: function (tableName, colName, newValue, id) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [tableName, colName, newValue, id], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

// Exports the orm object
module.exports = orm;