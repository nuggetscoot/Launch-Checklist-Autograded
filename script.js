// Write your JavaScript code here!

// const { addDestinationInfo } = require("./scriptHelper");

 //const { pickPlanet } = require("./scriptHelper");
 //const { myFetch } = require("./scriptHelper")
 //const { formSubmission } = require("./scriptHelper")
window.addEventListener("load", function () {
   let button = document.getElementById("formSubmit");                       
        button.addEventListener("click", function (event) {
            event.preventDefault();
           let pilotName = document.querySelector("input[name=pilotName]");
        //    let pilotName = document.getElementById("pilotName")
           let copilotName = document.querySelector("input[name=copilotName]");
        // let copilotName = document.getElementById("copilotName")
           let fuelLevel = document.querySelector("input[name=fuelLevel]");
        // let fuelLevel = document.getElementById("fuelLevel")
           let cargoLevel = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");
            formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoLevel);

        });
    });
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
      
       
    
});
