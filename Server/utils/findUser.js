var userData = require("../data/userData");

//===============================================================================
// This is a utility function which finds and returns the index of a user in the
// userData array, given its userID. If the user is not found, null is returned
//===============================================================================
function findUser(uid) {
    var i=0;                            // array/loop index
    var found = false;                  // boolean for the user search

    // find the user corresponding to the given user id
    while (i < userData.length && (!found)) {
        if (uid === userData[i].person.userID) {
            found = true;
            // if found, return index
            return i;
        }
        else {
            // keep looking
            i++;
        }
    }

    if (found === false) {
        return null;
    }
}

// we export the function. This makes it accessible to other files using require.
module.exports = findUser;