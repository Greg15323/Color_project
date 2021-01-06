function getLocalStorage() {

    fetch("api/colorRoutes", {
        method: "GET",

        headers: { "Content-Type": "application/json" },
    })
        .then (res=>res.json())
        .then(function (coloraves) {
              
                //these are the previous average values that will get averaged with theuser inputs that are on local storage.
                const prevNumberEntries = coloraves.id;
                const prevFavRedAve = coloraves.fav_red_ave;
                const prevFavGreenAve = coloraves.fav_green_ave;
                const prevFavBlueAve = coloraves.fav_blue_ave;
                const prevLeastFavRedAve = coloraves.least_fav_red_ave;
                const prevLeastFavGreenAve = coloraves.least_fav_green_ave;
                const prevLeastFavBlueAve = coloraves.least_fav_blue_ave;


                // getting the color values from what the user picked last time from local storage and turning the string into an int
                let userFavRed = localStorage.getItem("FavRed");
                userFavRed = parseInt(userFavRed);
                let userFavGreen = localStorage.getItem("FavGreen");
                userFavGreen = parseInt(userFavGreen);
                let userFavBlue = localStorage.getItem("FavBlue");
                userFavBlue = parseInt(userFavBlue);
                let userLeastFavRed = localStorage.getItem("LeastFavRed");
                userLeastFavRed = parseInt(userLeastFavRed);
                let userLeastFavGreen = localStorage.getItem("LeastFavGreen");
                userLeastFavGreen = parseInt(userLeastFavGreen);
                let userLeastFavBlue = localStorage.getItem("LeastFavBlue");
                userLeastFavBlue = parseInt(userLeastFavBlue);

                //Calculates red, blue and green averages
                const newFavRedAve = (prevFavRedAve * prevNumberEntries + userFavRed) / (prevNumberEntries + 1);
                const newFavGreenAve = (prevFavGreenAve * prevNumberEntries + userFavGreen) / (prevNumberEntries + 1);
                const newFavBlueAve = (prevFavBlueAve * prevNumberEntries + userFavBlue) / (prevNumberEntries + 1);
                const newLeastRedAve = (prevLeastFavRedAve * prevNumberEntries + userLeastFavRed) / (prevNumberEntries + 1);
                const newLeastGreenAve = (prevLeastFavGreenAve * prevNumberEntries + userLeastFavGreen) / (prevNumberEntries + 1);
                const newLeastBlueAve = (prevLeastFavBlueAve * prevNumberEntries + userLeastFavBlue) / (prevNumberEntries + 1);

                //fixes an issue where if they just sumbitted then their number hasn't been counted in the database befure this is generated
                if(localStorage.getItem("submitted") == null){
                document.getElementById("intro").innerHTML = (prevNumberEntries +1) + " people have submitted their favorite and least favorite colors.";
                }
                else{
                    document.getElementById("intro").innerHTML = prevNumberEntries + " people have submitted their favorite and least favorite colors.";
                }




                //rounds to the nearest number an merges the color values so that the background linear gradient can be generated from the most recent averages

                function averageBackground(){
                    const fr = Math.round(newFavRedAve);
                    const fg = Math.round(newFavGreenAve);
                    const fb = Math.round(newFavBlueAve);
                    const favbgColor = "rgb(" + fr + "," + fg + "," + fb + ")";
                 console.log(favbgColor);
                    const lfr = Math.round(newLeastRedAve);
                    const lfg = Math.round(newLeastGreenAve);
                    const lfb = Math.round(newLeastBlueAve);
                    const leastFavbgColor = "rgb(" + lfr + "," + lfg + "," + lfb + ")";
                 console.log(leastFavbgColor);
                       document.body.style.background =`linear-gradient(${favbgColor}, ${leastFavbgColor})`;


                       
                    }

                    averageBackground();

                    //checks if the user's choices has been added to the database, if it hasn't then it posts to the sql database and writes a confirmation that they've submitted into local storage.
                    
                    if(localStorage.getItem("submitted") == null){
                        console.log(localStorage.getItem("submitted"));

                fetch("/api/colorRoutes", {
                    method: "POST",
                    body: JSON.stringify({ fav_red_ave : newFavRedAve, fav_green_ave : newFavGreenAve, fav_blue_ave : newFavBlueAve, least_fav_red_ave : newLeastRedAve, least_fav_green_ave : newLeastGreenAve, least_fav_blue_ave : newLeastBlueAve }),
                    headers: { "Content-Type": "application/json" },
                });

                localStorage.setItem('submitted', "yeah boi");

            }
        })

}




getLocalStorage();










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


//getLastAverage();

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
// document
//     .querySelector(".picker_done")
//     .addEventListener("button", submitColor);


// let serverclickstate = 1;

// if (serverclickstate === 1) {
//     console.log("click 1");
//     serverclickstate++;
// }
// else {
//     console.log("click 2");
// }





