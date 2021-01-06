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

        res.render("results");
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;