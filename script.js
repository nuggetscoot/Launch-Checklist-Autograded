// Write your JavaScript code here!

// const { pickPlanet } = require("./scriptHelper");
// const { myFetch } = require("./scriptHelper")
window.addEventListener("load", function () {
    let listedPlanets;

    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    myFetch().then(function (result) {
        listedPlanets = result;

        const selectedPlanet = pickPlanet(listedPlanets);

        // Below this comment, call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
        addDestinationInfo(
            selectedPlanet.name,
            selectedPlanet.diameter,
            selectedPlanet.star,
            selectedPlanet.distance,
            selectedPlanet.moons,
            selectedPlanet.imageUrl
        );
       
        const launchForm = document.querySelector("form[data-testid='testForm']");

        launchForm.addEventListener("submit", function (event) {
            event.preventDefault();

            formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);


        });
    });
});



