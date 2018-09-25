// ===============================================================================
// DATA
// Below array will hold all of the user profile data
// ===============================================================================

var userArray = [
    {
        person:{
            address:{
                streetNumber:"1312",
                streetName:"Millbrook Road",
                city:"Raleigh",
                state:"North Carolina",
                zip:"27608",
                unitNumber:null
            },
            gender:"female",
            givenName:"Teresa",
            familyName:"Lewis",
            imageURL:"female3.png",
            userID: "5733a7337e3d61136595a0c9"
        }
    },
    {
        person:{
            address:{
                streetNumber:"1589",
                streetName:"Wade Avenue",
                city:"Raleigh",
                state:"North Carolina",
                zip:"27609",
                unitNumber:"12"
            },
            gender:"female",
            givenName:"Olivia",
            familyName:"Smith",
            imageURL:"female3.png",
            userID: "8145a7337e3d61136595a0f3"
        }
    },
    {
        person:{
            address:{
                streetNumber:"2426",
                streetName:"Memory Ridge Road",
                city:"Raleigh",
                state:"North Carolina",
                zip:"27606",
                unitNumber:null
            },
            gender:"male",
            givenName:"Dan",
            familyName:"DuVarney",
            imageURL:"male3.png",
            userID: "7632a7337e3d61136595b6c2"
        }
    },
    {
        person:{
            address:{
                streetNumber:"1616",
                streetName:"Lethbridge Court",
                city:"Durham",
                state:"North Carolina",
                zip:"27702",
                unitNumber:null
            },
            gender:"female",
            givenName:"Shandra",
            familyName:"Wilkinson",
            imageURL:"female3.png",
            userID: "6745a7337e3d611365953452"
        }
    },
    {
        person:{
            address:{
                streetNumber:"104",
                streetName:"Kingsmill Road",
                city:"Cary",
                state:"North Carolina",
                zip:"27511",
                unitNumber:null
            },
            gender:"male",
            givenName:"Bill",
            familyName:"Kiether",
            imageURL:"male3.png",
            userID: "1278a7337e3d61136595eeee"
        }
    }
];

// we export the array. This makes it accessible to other files using require.
module.exports = userArray;
