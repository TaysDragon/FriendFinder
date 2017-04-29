// ===============================================================================
// LOAD DATA
// Dependecies (express, body-parse) are in server.js
//path is in html routs
// Linking our routes to a series of "data" sources.
// These data sources hold arrays of information on people.
// ===============================================================================

var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });


    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out the survey... this data is then sent to the server...
    // Then the server saves the data to the personArray array)
    // ---------------------------------------------------------------------------


    //Function to loop through the MatchArrayData and find the closest match
    //   app.get("/data/MatchArrayData", function(data) {
    // for (var i = 0; i < data.length; i++) {


    app.post("/api/survey", function(req, res) {
        console.log(userData);
        friendsArray.push(userData);

        res.json(userData);
    });


    // Search through friendsArray - provides JSON ** need to change this
    app.get("/api/:friendsArray?", function(req, res) {
            var user1 = [];
            var user2 = [];
            var difference = [];
            var highest difference

            for (var i = 0; i < friendsArray.length; i++) {
                if (chosen === friendsArray[i].routeName) {
                    return res.json(friendsArray[i]);
                }
            }

            return res.json(false);
        }
        return res.json(friendsArray);
    });

};
