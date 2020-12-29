const submitColor = () => {
    // Retrieve RGB properties from vanilla-picker response for values
    const favRed = "";
    const favGreen = "";
    const favBlue = "";
    const leastFavRed = "";
    const leastFavGreen = "";
    const leastFavBlue = "";

    const response = await fetch("/api", {
        method: "POST",
        body: JSON.stringify({ favRed, favGreen, favBlue, leastFavRed, leastFavGreen, leastFavBlue }),
        headers: { "Content-Type": "application/json" },
    });

    // Not sure if this is how to grab the json data?
    localStorage.setItem("myColors", response.body);


    //Redirects to results page
    document.location.replace("/results");
}

//Do we want a button to update color choices on results page?




//getting last average from the database

//note this part hasn't been tested yet!!!!!!!!!! to line 66.
//we need to get the server running to make this work.


const mysql = require("mysql");

const connection = require("./config/connection");

var returnedFavRed;
var returnedFavGreen;
var returnedFavBlue;
var returnedLeastFavRed;
var returnedLeastFavGreen;
var returnedLeastFavBlue;
var totalPrevEntries;
getLastAverage();

function getLastAverage() {
    const query = "SELECT * FROM `colors` WHERE id=(SELECT MAX(id) FROM `colors`)";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.log(res);
        //declaring the response values?
        returnedFavRed = res.fav_red_ave;
        returnedFavGreen = res.fav_green_ave;
        console.log("testing returning ave green" + returnedFavGreen);
        console.log("test");
        returnedFavBlue = res.fav_blue_ave;
        returnedLeastFavRed = res.least_fav_red_ave;
        returnedLeastFavGreen = res.least_fav_green_ave;
        returnedLeastFavBlue = res.least_fav_blue_ave;
        //total number of previous entries to get new average
        totalPrevEntries = res.id;


    });
}


// Event listener for submit button
document
    .querySelector(".button")
    .addEventListener("button", submitColor);




