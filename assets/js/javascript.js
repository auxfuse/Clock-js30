/*
==================
Global Variables
==================
*/
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");


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
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    }

/*
==================
Assistant Functions
==================
*/

// Use setInterval built in JS function to update setDate function every 1 second.
setInterval(setDate, 1000);