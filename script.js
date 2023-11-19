// Write your JavaScript code here!

const { pickPlanet } = require("./scriptHelper");
const { myFetch } = require("./scriptHelper")
window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  
    let listedPlanetsResponse = myFetch();
    myFetch().then(function (result) {
        const selectedPlanet = pickPlanet(listedPlanets);
        return selectedPlanet;
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment, call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        addDestinationInfo(
            document,
            "Saturn/Titan",
            "5149.5 km",
            "Sol",
            "1.4 billion km from Earth",
            "0",
            "https://solarsystem.nasa.gov/system/resources/detail_files/16278_PIA20016.jpg"
        )
        const launchForm = document.querySelector("form[data-testid='testForm']");
        launchForm.addEventListener("submit", function(){
            event.preventDefault();
            const pilotName = document.getElementById("pilotName").value;
            const copilotName = document.getElementById("copilotName").value;
            const fuelLevel = document.getElementById("fuelLevel").value;
            const cargoMass = document.getElementById("cargoMass").value;
            formSubmission(pilotName, copilotName, fuelLevel, cargoMass);
        })
    }) 
});

 module.exports = {
    validateInput,
    formSubmission,
 };