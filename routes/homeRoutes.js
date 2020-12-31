const router = require("express").Router();
const { Color } = require("../models");

router.get("/", async (req, res) => {
    try {
        // Pick your color page

        // Re-directs to results page if colors already saved in local storage
        // if (localStorage !== null) {
        //     document.location.replace("/results");
        // } else {
            res.render("homepage");
  //      }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/results", async (req, res) => {
    try {
        Color.findAll({
            attributes: ["id", "fav_red_ave", "fav_green_ave", "fav_blue_ave", "least_fav_red_ave", "least_fav_green_ave", "least_fav_blue_ave"],
            order: [[ 'id', 'DESC' ]],
            limit: 1,
            plain: true


          }).then(function(coloraves){
              
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