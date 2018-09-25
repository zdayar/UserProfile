var userData = require("../data/userData");

function findUser(uid) {
    var i=0;                            // array/loop index
    var found = false;                  // boolean for the user search

    // find the user corresponding to the given user id
    while (i < userData.length && (!found)) {
        if (uid === userData[i].person.userID) {
            found = true;
            // if found, return array index
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

module.exports = findUser;