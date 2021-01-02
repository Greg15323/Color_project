function changeBackground() {

    //Need to change xyz & abc values to color aves
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor1 = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor1);
    const a = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const c = Math.floor(Math.random() * 256);
    const bgColor2 = "rgb(" + a + "," + b + "," + c + ")";
    console.log(bgColor2);

    document.body.style.background = `linear-gradient(${bgColor1}, ${bgColor2})`;
}
changeBackground();



//Do we want a button to update color choices on results page?




//getting last average from the database

//note this part probably is a dead end
//we need to get the server running to make this work.


// const mysql = require("mysql");

// const connection = require("./config/connection");

var returnedFavRed;
var returnedFavGreen;
var returnedFavBlue;
var returnedLeastFavRed;
var returnedLeastFavGreen;
var returnedLeastFavBlue;
var totalPrevEntries;
getLastAverage();

// function getLastAverage() {
//     console.log("test");
//     const query = "SELECT * FROM `colors` WHERE id=(SELECT MAX(id) FROM `colors`)";
//     connection.query(query, function (err, res) {
//         if (err) throw err;
//         console.log(res);
//         //declaring the response values?
//         returnedFavRed = res.fav_red_ave;
//         returnedFavGreen = res.fav_green_ave;
//         console.log("testing returning ave green" + returnedFavGreen);
//         console.log("test");
//         returnedFavBlue = res.fav_blue_ave;
//         returnedLeastFavRed = res.least_fav_red_ave;
//         returnedLeastFavGreen = res.least_fav_green_ave;
//         returnedLeastFavBlue = res.least_fav_blue_ave;
//         //total number of previous entries to get new average
//         totalPrevEntries = res.id;


//     });
// }


// Event listener for submit button
document
    .querySelector(".picker_done")
    .addEventListener("button", submitColor);


let serverclickstate = 1;

if (serverclickstate === 1) {
    console.log("click 1");
    serverclickstate++;
}
else {
    console.log("click 2");
}





