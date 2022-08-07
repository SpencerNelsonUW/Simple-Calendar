//this variable is now equal to the default formatted moment function/api
var now = moment().format("LT");
//this is where I tell the element to show its inner HTML as the variable created above
document.getElementById("currentDay").innerHTML = now;

//timeSlot is equal to selecting all timeSlot classed divs, there are 10 of these divs
var timeSlot = $(".timeSlot");
//console.log(timeSlot);
var hourDiv = $(".hour");

function init(){
for (var i=0; i < timeSlot.length; i++){        //continue to loop until we have done the loop equal to the amount of timeslot divs, ie 10 times
    var hourArray = timeSlot[i];                //hourArray is an array of timeSlot divs, and each can be logged individually
    //console.log(hourArray)
    var hour = hourArray.children[0].textContent    //this selects the text within the timeSlot Div individually so that they can be logged and accessed individually
    //console.log(hour)
    var timeInstance = moment(hour, "LT");    //this converts the each text within the timeSlot div individually into a moment
    //console.log(timeInstance)
    var hourDivArray = hourDiv[i];
    //THIS SHOULD COMPARE THE CURRENT MOMENT TO SEE IF IT IS BEFORE OR AFTER THE timeInstance AKA the timeSlot time
    //console.log(moment().format("LT") == timeInstance)
    //console.log(moment().isAfter(timeInstance))
    //console.log(moment().isAfter(timeInstance))
    if (moment().isBefore(timeInstance)){
        hourDivArray.setAttribute("class", "past");
    } 
    else if (moment().isAfter(timeInstance)){
        hourDivArray.setAttribute("class", "future");
    } else {
        hourDivArray.setAttribute("class", "present");
    }
}}

init();


//SECTION OF JS TO SAVE AND RETRIEVE THE TEXT ENTERED BY THE USER
$(".saveBtn").on("click", function () {
    // Get nearby values of the userText in JQuery
    var text = $(this).siblings(".userText").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
})

// Get item from local storage if any
function getTime() {
$("#hour8 .userText").val(localStorage.getItem("hour8"));
$("#hour9 .userText").val(localStorage.getItem("hour9"));
$("#hour10 .userText").val(localStorage.getItem("hour10"));
$("#hour11 .userText").val(localStorage.getItem("hour11"));
$("#hour12 .userText").val(localStorage.getItem("hour12"));
$("#hour13 .userText").val(localStorage.getItem("hour13"));
$("#hour14 .userText").val(localStorage.getItem("hour14"));
$("#hour15 .userText").val(localStorage.getItem("hour15"));
$("#hour16 .userText").val(localStorage.getItem("hour16"));
$("#hour17 .userText").val(localStorage.getItem("hour17"));
}

getTime();

