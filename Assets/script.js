//this variable is now equal to the default formatted moment function/api
var now = moment().format("LT");
//this is where I tell the element to show its inner HTML as the variable created above
document.getElementById("currentDay").innerHTML = now;

//timeSlot is equal to selecting all timeSlot classed divs, there are 10 of these divs
var timeSlot = $(".timeSlot");
//console.log(timeSlot);

function init(){
for (var i=0; i < timeSlot.length; i++){        //continue to loop until we have done the loop equal to the amount of timeslot divs, ie 10 times
    var hourArray = timeSlot[i];                //hourArray is an array of timeSlot divs, and each can be logged individually
    //console.log(hourArray)
    var hour = hourArray.children[0].textContent    //this selects the text within the timeSlot Div individually so that they can be logged and accessed individually
    //console.log(hour)
    var timeInstance = moment(hour, "LT");    //this converts the each text within the timeSlot div individually into a moment
    
    //THIS SHOULD COMPARE THE CURRENT MOMENT TO SEE IF IT IS BEFORE OR AFTER THE timeInstance AKA the timeSlot time
    if (moment().isAfter(timeInstance)){
        $(".timeSlot").addClass("past");
    } else if (moment().isBefore(timeInstance)){
        $(".timeSlot").addClass(".future");
    } else {
        $(".timeSlot").addClass(".present");
    }
}}

init();











// BROKEN ATTEMPT AT HAVING THE USER SAVE TEXT INPUT 
// telling Java that my userInput variable is the same as the userInput class's value
// this may save all the elements with that class not just the one line
// this is only set up on the top line. make sure to add it to all the necessary lines in html if it works
// let userInput = $(".userInput").value;

// telling HTML that my saveBtn variable is the same as the saveBtn in html
// let saveBtn = $(".saveBtn");

// making an event listener for the save button and to start the saveUserInput function when clicked.
// saveBtn.on("click", saveUserInput());

// save function to stringify the value of userInput and save it locally as "userText"
// function saveUserInput(){
//    var sendJSON = JSON.stringify(userInput);
//    localStorage.setItem("userText", sendJSON)
// }

// function to parse the saved string
// function get() {
//    var getJSON = localStorage.getItem("userText");
//    if (getJSON){
//        userText = JSON.parse(getJSON)
//    }
// }

// window.addEventListener("load", (get))