var express = require('express');
var app = express();

var server = app.listen(1305, function() {
    console.log("server listening on port 1303")
});

var dummyjson = {
    "data": [{
            "id": 1,
            "email": "michael.lawson@abc.com",
            "first_name": "Michael",
            "last_name": "Lawson"
        },
        {
            "id": 2,
            "email": "lindsay.ferguson@abc.com",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "address": {
                "line1": "Ahmedabad"
            }
        },
        {
            "id": 3,
            "email": "tobias.funke@abc.com",
            "first_name": "Tobias",
            "last_name": "Funke"
        }
    ]
};

app.get("/", function(req, res) {
    var finalObj = [];
    finalObj = convertToUpper(dummyjson);
    res.send(finalObj);
});

function convertToUpper(obj) {
    for (var prop in obj) {
        if (typeof obj[prop] === 'string') {
            obj[prop] = obj[prop].toUpperCase();
        }
        if (typeof obj[prop] === 'object') {
            convertToUpper(obj[prop]);
        }
    }
    return obj;
}