const router = require("express").Router();
const { Color } = require("../models");

router.get("/", async (req, res) => {
    try {
        res.render("homepage");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/results", async (req, res) => {
    try {
        Color.findAll({
            attributes: ["id", "fav_red_ave", "fav_green_ave", "fav_blue_ave", "least_fav_red_ave", "least_fav_green_ave", "least_fav_blue_ave"],
            order: [['id', 'DESC']],
            limit: 1,
            plain: true


        }).then(function (coloraves) {

            console.log(coloraves);
            console.log("id = " + coloraves.dataValues.id);
            const prevNumberEntries = coloraves.dataValues.id;
            const prevFavRedAve = coloraves.dataValues.fav_red_ave;
            const prevFavGreenAve = coloraves.dataValues.fav_green_ave;
            const prevFavBlueAve = coloraves.dataValues.fav_blue_ave;
            const prevLeastFavRedAve = coloraves.dataValues.least_fav_red_ave;
            const prevLeastFavGreenAve = coloraves.dataValues.least_fav_green_ave;
            const prevLeastFavBlueAve = coloraves.dataValues.least_fav_blue_ave;
            //these are the previous average values that will get averaged with theuser inputs that are on local storage.

            // Not sure if lines 35-48 are in right place, but should calculate average.
            const userFavRed = localStorage.getItem(JSON.stringify("FavRed"));
            const userFavGreen = localStorage.getItem(JSON.stringify("FavGreen"));
            const userFavBlue = localStorage.getItem(JSON.stringify("FavBlue"));
            const userLeastFavRed = localStorage.getItem(JSON.stringify("LeastFavRed"));
            const userLeastFavGreen = localStorage.getItem(JSON.stringify("LeastFavGreen"));
            const userLeastFavBlue = localStorage.getItem(JSON.stringify("LeastFavBlue"));

            //Calculates red, blue and green averages
            const newFavRedAve = (prevFavRedAve * prevNumberEntries + userFavRed) / (prevNumberEntries + 1);
            const newFavGreenAve = (prevFavGreenAve * prevNumberEntries + userFavGreen) / (prevNumberEntries + 1);
            const newFavBlueAve = (prevFavBlueAve * prevNumberEntries + userFavBlue) / (prevNumberEntries + 1);
            const newLeastRedAve = (prevLeastFavRedAve * prevNumberEntries + userLeastFavRed) / (prevNumberEntries + 1);
            const newLeastGreenAve = (prevLeastFavGreenAve * prevNumberEntries + userLeastFavGreen) / (prevNumberEntries + 1);
            const newLeastBlueAve = (prevLeastFavBlueAve * prevNumberEntries + userLeastFavBlue) / (prevNumberEntries + 1);
        })

        // Display results page
        res.render("results");
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;