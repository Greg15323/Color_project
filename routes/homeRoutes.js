const router = require("express").Router();
const { Color } = require("../models");

router.get("/", async (req, res) => {
    try {
        // Pick your color page

        //Re-directs to results page if colors already saved in local storage
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
        // Display results page
        res.render("results");
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;