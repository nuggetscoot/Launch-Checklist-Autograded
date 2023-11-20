// Write your helper functions here!
require('cross-fetch/polyfill');

 function validateInput(input) {
// console log an input's status, then return false if not valid and true if valid
    if (!input || input === "") {
        console.log(input + "is an empty input")
        return "Empty"
    } else if (isNaN(input)) {
        console.log(input + " is not a number")
        return "Not a Number"
    } else {
        console.log(input + " is a valid input")
        return "Is a Number"
    }
 }
 
 function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) {

    // Establishing element variables
    h2 = document.getElementById("launchStatus");
    pilotStatus = document.getElementById("pilotStatus");
    copilotStatus = document.getElementById("copilotStatus");
    fuelStatus = document.getElementById("fuelStatus");
    cargoStatus = document.getElementById("cargoStatus");
    list = document.getElementById("faultyItems");
     
    pilotName = document.getElementById("pilotName").value;
    copilotName = document.getElementById("copilotName").value;
    fuelLevel = document.getElementById("fuelLevel").value;
    cargoMass = document.getElementById("cargoMass").value;
   
    let validInputs = false
    if(validateInput(pilotName) == "Empty") validInputs = "Empty"
    if(validateInput(copilotName) == "Empty") validInputs = "Empty"
    if(validateInput(fuelLevel) == "Empty") validInputs = "Empty"
    if(validateInput(cargoMass) == "Empty") validInputs = "Empty"
    else if(validInputs == "Empty") alert("All fields required")

    // Default Styling
    h2.style.color = "black";
    h2.innerHTML = "Awaiting Information Before Launch";
    pilotStatus.innerHTML = `Pilot Chris is ready for launch`;
    copilotStatus.innerHTML= `Co-pilot Bob is ready for launch`;
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";

        if (fuelLevel < 1000) {
            h2.style.color = "red";
            h2.innerHTML = "Shuttle Not Ready for Launch";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            list.style.visibility = "visible"; 
        }

        else if (cargoMass > 10000) {
            h2.style.color = "red";
            h2.innerHTML = "Shuttle Not Ready for Launch";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            list.style.visibility = "visible"; 
        }

        else if (fuelLevel < 1000 && cargoMass > 10000) {
            h2.style.color = "red";
            h2.innerHTML = "Shuttle Not Ready for Launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            list.style.visibility = "visible"; 
        }

        else if (fuelLevel > 1000 && cargoMass < 10000){
            h2.style.color = "green";
            h2.innerHTML = "Shuttle is Ready for Launch";
            list.style.visibility = "visible";
        }
    }


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
 
 
 
     async function myFetch() {
    
            let response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
            let planetsReturned = await response.json();
            return planetsReturned;
    
    }
    
 
 function pickPlanet(planetsReturned) {
    const randomIndex = Math.floor(Math.random() * planetsReturned.length);
    return planetsReturned[randomIndex];
 }

 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;