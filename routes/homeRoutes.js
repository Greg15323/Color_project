const router = require("express").Router();
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