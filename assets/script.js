var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var today = new Date();

function printCurrentDate() {
    var dateString = dayNames[today.getDay()] + ", " + monthNames[today.getMonth()] + " " + today.getDate() + " " + today.getFullYear();

    $("#currentDay").html(dateString);
}
//displays current date at the top of the page

function assignTimeBlockClasses() {
    //assigns past,prestent, and future classes to each timeblock
    var hour = today.getHours();
    for(let x = 8; x < 18; x++){
        if (x < hour){
            $("#hour"+x).addClass("past");
        }
        else if (x == hour) {
            $("#hour"+x).addClass("present");
        }
        else {
            $("#hour"+x).addClass("future");
        }
    }
}

function retrieveSavedEvent() {
    //checks local storage for previosly saved event
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
}

function saveEvent(timeblock, event) {
    //stores event to local storage
    localStorage.setItem(timeblock, event);
}

$(document).ready(function() {
    printCurrentDate();
    assignTimeBlockClasses();
    retrieveSavedEvent();
    
    $(".saveBtn").on("click", function() {
        saveEvent($(this).parent().attr("id"), $(this).siblings("textarea").val());
    });
});
