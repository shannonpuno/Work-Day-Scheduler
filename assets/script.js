
// Display currrent day at top of calendar
$("#currentDay").text(moment().format('dddd, MMM Do YYYY'));

//Color-Code every time block indicating if it is in the past,present,future
function timeBlocks () {
    var currTime = moment().hour();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));

        if(currHour > currTime){
            $(this).addClass("future");
        } else if(currHour === currTime){
            $(this).addClass("present");
        } else{
            $(this).addClass("past");
        }
    })
};
// Call the function 
timeBlocks();

//When user clicks on time block they can add event and save it

$(document).ready(function() {
    //Added event lister for saveBtn on click
    $(".saveBtn").on("click", function() {
        var events = $(this).siblings(".event").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, events);
    });

// When user refreshes the page then saved events persist
    function saveEvents() {
        $(".event").each(function(){
            var eventHour = $(this).text();
            var currEvent = localStorage.getItem(eventHour);
        });
    };
// Call function
    saveEvents();

// Get Item from local storage if user adds any events
$("#9 .event").val(localStorage.getItem("9"));
$("#10 .event").val(localStorage.getItem("10"));
$("#11 .event").val(localStorage.getItem("11"));
$("#12 .event").val(localStorage.getItem("12"));
$("#13 .event").val(localStorage.getItem("13"));
$("#14 .event").val(localStorage.getItem("14"));
$("#15 .event").val(localStorage.getItem("15"));
$("#16 .event").val(localStorage.getItem("16"));
$("#17 .event").val(localStorage.getItem("17"));


});