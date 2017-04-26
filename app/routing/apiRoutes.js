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

  app.get("/api/survey", function(req, res) {
    res.json(friends);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out the survey... this data is then sent to the server...
  // Then the server saves the data to the personArray array)
  // ---------------------------------------------------------------------------


//Function to loop through the MatchArrayData and finc the closest match
//   app.get("/data/MatchArrayData", function(data) {
// for (var i = 0; i < data.length; i++) {


  app.post("/api/survey", function(req, res) {
    
  friends.push(req.body);


  });

};
