/*
==================
Global Variables
==================
*/
const secondsHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");


/*
==================
Main Functions
==================
*/

// setDate function to get time and split to hours/minutes/seconds and rotate each hand as needed.
function setDate() {
    // Create and retrieve Current Date and store in variable.
    const now = new Date();

    // Retrieve seconds from current Date variable "now".
    const seconds = now.getSeconds();
    // Convert seconds into notable points in 360degrees and use style.transform to implement into css for seconds hand tick movement.
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Retrieve minutes from current Date variable "now".
    const mins = now.getMinutes();
    // Convert minute into notable points in 360degrees and use style.transform to implement into css for minutes hand tick movement.
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    // Retrieve hours from current Date variable "now".
    const hours = now.getHours();
    // Convert hour into notable points in 360degrees and use style.transform to implement into css for hours hand tick movement.
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

/*
==================
Assistant Functions
==================
*/

// Use setInterval built in JS function to update setDate function every 1 second.
setInterval(setDate, 1000);

setDate();