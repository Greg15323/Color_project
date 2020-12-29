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

setShareLinks();

function socialWindow(url) {
  var left = (screen.width - 570) / 2;
  var top = (screen.height - 570) / 2;
  var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
  // Setting 'params' to an empty string will launch
  // content in a new tab or window rather than a pop-up.
  // params = "";
  window.open(url,"NewWindow",params);
}

function setShareLinks() {
  var pageUrl = encodeURIComponent(document.URL);
  var tweet = encodeURIComponent($("meta[property='og:description']").attr("content"));

  $(".social-share.facebook").on("click", function() {
    url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
    socialWindow(url);
  });

  $(".social-share.twitter").on("click", function() {
    url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
    socialWindow(url);
  });

  $(".social-share.linkedin").on("click", function() {
    url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
    socialWindow(url);
  })
}

Resources
});