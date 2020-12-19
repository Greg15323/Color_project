const router = require("express").Router();
//Cannot find module models
const { Color } = require("../models");

router.get("/", async (req, res) => {
    try {
        // What to do with Color data...

        res.render("homepage");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;