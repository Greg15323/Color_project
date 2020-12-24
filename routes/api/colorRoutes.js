const router = require("express").Router();
const { Color } = require("../../models");

// Gets all colors for displaying data
router.get("/", (req, res) => {
    Color.findAll({})
        .then((colorData) => res.status(200).json(colorData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// Create favorite/least favorite colors
router.post("/", (req, res) => {
    Color.create(req.body)
        .then((colorData) => {
            res.status(200).json(colorData);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// Gets your colors
router.get("/:id", (req, res) => {
    Color.findByPk(this.id)
        .then((colorData) => res.status(200).json(colorData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// Update your color choices
router.put("/:id", (req, res) => {
    Color.update(
        {
            where: {
                id: this.id,
            },
        })
        .then((updatedColors) => {
            res.status(200).json(updatedColors);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});




module.exports = router;