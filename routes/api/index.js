const router = require("express").Router();
const homeRoutes = require("../homeRoutes");
const colorRoutes = require("./colorRoutes");




router.use("/colorRoutes", colorRoutes);
router.use("/", homeRoutes);

module.exports = router;