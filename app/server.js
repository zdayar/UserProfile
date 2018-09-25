// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================
// Tells node that we are creating an "express" server
var app = express();

//serve all files in Client/public directory as is
app.use(express.static('Client/public'));

// Sets an initial port for local testing. We'll use this in our listener
var PORT = process.env.PORT || 8080;

// ================================================================================
// ROUTER
// The below points our server to "route" files.
// These routes give our server a "map" of how to respond when
// users request data from various URLs.
// ================================================================================
require("../Server/routes/apiRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
