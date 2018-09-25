var userData = require("../data/userData");
var findUser = require("../utils/findUser");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests

  // ---------------------------------------------------------------------------
  // Below code handles GET /api/testUser/:userid
  // the response will be JSON of the data for the specific user
  // (based on its userID) from the users table
  // ---------------------------------------------------------------------------
  app.get("/api/testUser/:userid", function(req, res) {
    var foundIndex;                     // array index
    var uid = req.params.userid;        // extract the user id from the request uri

    foundIndex = findUser(uid);         // find the user in the users table

    if (foundIndex === null) {
        // if user not found, return null
        res.json(null);
    }
    else {
        // user was found; return its JSON
        res.json(userData[foundIndex]);
    }
  });

  // ---------------------------------------------------------------------------
  // Below code handles GET /api/testUsers
  // the response will be JSON for all the users
  // from the users table
  // ---------------------------------------------------------------------------
  app.get("/api/testUsers", function(req, res) {
    res.json(userData);
  });

};
