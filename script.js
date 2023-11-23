
window.addEventListener("load", function () {
   const missionTarget = document.getElementById("missionTarget");

   let button = document.getElementById("formSubmit");
   button.addEventListener("click", function (event) {
       event.preventDefault();
       let pilotName = document.querySelector("input[name=pilotName]").value;
       let copilotName = document.querySelector("input[name=copilotName]").value;
       let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
       let cargoLevel = document.querySelector("input[name=cargoMass]").value;
       let list = document.getElementById("faultyItems");

       formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoLevel);
   });

   let listedPlanets;

   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   myFetch().then(function (result) {
       listedPlanets = result;

       const selectedPlanet = pickPlanet(listedPlanets);

       // Below this comment, call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
       addDestinationInfo(
           document,
           missionTarget,
           selectedPlanet.name,
           selectedPlanet.diameter,
           selectedPlanet.star,
           selectedPlanet.distance, 
           selectedPlanet.moons,
           selectedPlanet.image,
       ); 
   });
});
