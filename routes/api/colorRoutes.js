const router = require("express").Router();
const { Color } = require("../../models");

// Gets all colors for displaying data
router.get("/", async(req, res) => {
    await Color.findAll({
        attributes: ["id", "fav_red_ave", "fav_green_ave", "fav_blue_ave", "least_fav_red_ave", "least_fav_green_ave", "least_fav_blue_ave"],
        order: [['id', 'DESC']],
        limit: 1,
        plain: true

    })
        .then((colorData) => res.status(200).json(colorData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// Create favorite/least favorite colors
router.post("/", (req, res) => {
    console.log("hi" ,req.body);
    Color.create(req.body)
        .then((colorData) => {
            res.status(200).json(colorData);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});






module.exports = router;