const submitColor = () => {
    // Retrieve RGB properties from vanilla-picker response for values
    const favRed = "";
    const favGreen = "";
    const favBlue = "";
    const leastFavRed = "";
    const leastFavGreen = "";
    const leastFavBlue = "";

    const response = await fetch("/api", {
        method: "POST",
        body: JSON.stringify({ favRed, favGreen, favBlue, leastFavRed, leastFavGreen, leastFavBlue }),
        headers: { "Content-Type": "application/json" },
    });

    // Not sure if this is how to grab the json data?
    localStorage.setItem("myColors", response.body);


    //Redirects to results page
    document.location.replace("/results");
}

//Do we want a button to update color choices on results page?

// Event listener for submit button
document
    .querySelector(".button")
    .addEventListener("button", submitColor);