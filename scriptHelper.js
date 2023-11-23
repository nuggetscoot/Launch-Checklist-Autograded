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
 
 function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoLevel) {

    // Establishing element variables
    const h2 = document.getElementById("launchStatus");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const launchStatus = document.getElementById("launchStatus");


    if (validateInput(pilotName.value) === "Empty" || validateInput(copilotName.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty") {
        alert("All fields are required")
    }
    // Default Styling
    h2.style.color = "black";
    h2.innerHTML = "Awaiting Information Before Launch";
    pilotStatus.innerHTML = `Pilot Chris is ready for launch`;
    copilotStatus.innerHTML= `Co-pilot Bob is ready for launch`;
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    list.style.visibility = "visible"; 

    
    if (fuelLevel.value <= 10000 && cargoLevel.value >= 10000) {
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        }
        else if (fuelLevel.value <= 10000) {
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }

        else if (cargoLevel.value >= 10000) {
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        }

       else if (fuelLevel.value >= 10000 && cargoLevel.value < 10000){
            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
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