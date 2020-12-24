const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./routes");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
// grab the body and select
var body = document.body;
var select = document.getElementById( 'color' );

// listen for the select's change event
select.onchange = function() {
    var color = select.options[select.selectedIndex].value; // get the selected color
    body.style.background = color; // apply the selected color to the body
};

});