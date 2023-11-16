// Write your helper functions here!
require('cross-fetch/polyfill');
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
 }
 
 function validateInput(input) {

  
if (!input || input === "") {
    return "Empty";
} else if (isNaN(input)) {
    return "Not a Number"
} else {
    return "Is a Number"
}
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    const pilotValidation = validateInput(pilot);
    const copilotValidation = validateInput(copilot);
    const fuelLevelValidation = validateInput(fuelLevel);
    const cargoMassValidation = validateInput(cargoMass);
       if (pilotValidation == "" || copilotValidation == "" || fuelLevelValidation == "" || cargoMassValidation == ""){
        return("All fields required")
    }
    const h2 = document.getElementById("launchStatus");
    const pilotStatus = document.getElementById("pilotStatus")
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const faultyItems = document.getElementById("faultyItems");

    list.innerHTML = "";
    h2.style.color = "black";
    document.getElementById("launchStatus").innerHTML = ""
    h2.innerHTML = "Awaiting Information Before Launch";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML= `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";

    if (fuelLevel < 1000) {
        list.innerHTML += "Fuel level too low for launch";
        h2.style.color = "red";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        faultyItems.style.visibility = "visible"; 
    }

    if (cargoMass > 10000) {
        list.innerHTML += "Cargo mass too heavy for launch";
        h2.style.color = "red";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        faultyItems.style.visibility = "visible"; 
    }

    if (cargoMass > 10000 && fuelLevel < 1000) {
        list.innerHTML += "Cargo mass too heavy for launch"; 
        list.innerHTML += "Fuel level too low for launch";
        h2.style.color = "red";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        faultyItems.style.visibility = "visible"; 
    }

    if (list.innerHTML === "") {
        h2.style.color = "green";
        h2.innerHTML = "Shuttle is Ready for Launch";
        faultyItems.style.visibility = "visible";

    }
//     const pilotValidation = validateInput(pilot);
//     const copilotValidation = validateInput(copilot);
//     const fuelLevelValidation = validateInput(fuelLevel);
//     const cargoMassValidation = validateInput(cargoMass);
   

//     if (pilotValidation == "Empty" || copilotValidation == "Empty" || fuelLevelValidation == "Empty" || cargoMassValidation == "Empty" ) {
//    return("All fields are required")

//     } else {
//         document.getElementById("pilotStatus").innerText = `Pilot Ready`;
//         document.getElementById("copilotStatus").innerText = `Co-pilot Ready`;
//         const fuelLevelNumber = Number(fuelLevel);
//         const cargoMassNumber = Number(cargoMass);
//         if (fuelLevelNumber < 10000) {
//             document.getElementById("faultyItems").style="visibility: visible";
//             document.getElementById("fuelStatus").innerText = "Fuel level too low for launch";
//             document.getElementById("launchStatus").innerText = "Shuttle not ready for launch";
//             document.getElementById("launchStatus").style.color = "red";
//         } else {
//             document.getElementById("fuelStatus").innerText = "Fuel level high enough for launch";
//         }
//         if (cargoMassNumber > 10000) {
//             document.getElementById("faultyItems").style="visibility: visible";
//             document.getElementById("cargoStatus").innerText = "Cargo mass too high for launch";
//             document.getElementById("launchStatus").innerText = "Shuttle not ready for launch";
//             document.getElementById("launchStatus").style.color = "red";
//         } else {
//             document.getElementById("cargoStatus").innerText = "Cargo mass low enough for launch";
//         }
//         if (fuelLevelNumber >= 10000 && cargoMassNumber <= 10000) {
//             document.getElementById("launchStatus").innerText = "Shuttle is Ready for Launch";
//             document.getElementById("launchStatus").style.color = "green";
            
//         }


//     }


    }
 
 
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) { return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
 }

 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;