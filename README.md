# UserProfile

- Description: the requirements for this coding assessment can be found at https://github.com/tmerriweather/assessment


- The project is deployed to Heroku and its functionality can be seen at  https://quiet-castle-56111.herokuapp.com/

- If you visit the home page (https://quiet-castle-56111.herokuapp.com/), you will see a list of all the users where each user's picture, name and address is displayed in a row, consistent with the style requirements provided. This screen looks like this:

    ![Main screen](ZD_MBA_HD/Users/zdayar/Desktop/UserProfileSS.png?raw=true "Main Screen Shot")

- If you visit the page https://quiet-castle-56111.herokuapp.com/api/testUsers , you will get the JSON for all 5 users defined in the users table, including their address, gender, name, image URL, and unique userID.

- If you visit the page
https://quiet-castle-56111.herokuapp.com/api/testUser/<uniqueUserID> ,
you will get the JSON for the specific user whose userID matches <uniqueUserID>.

- For example, the output for https://quiet-castle-56111.herokuapp.com/api/testUser/1278a7337e3d61136595eeee is as follows:

       {
        "person": {
            "address: {
                "streetNumber": "104",
                "streetName": "Kingsmill Road",
                "city": "Cary",
                "state": "North Carolina",
                "zip": "27511",
                "unitNumber": null
            },
            "gender": "male",
            "givenName": "Bill",
            "familyName": "Kiether",
            "imageURL": "male3.png",
            "userID": "1278a7337e3d61136595eeee"
        }
       }

- Right now there are 5 user records defined in a table (in Server/data/userData.js) with the following unique userIDs:

        5733a7337e3d61136595a0c9
        8145a7337e3d61136595a0f3
        7632a7337e3d61136595b6c2
        6745a7337e3d611365953452
        1278a7337e3d61136595eeee

 - The front end uses Vue.js and all that code is in Client/public/index.html, and Client/public/\*.png and Client/public/\*.css


