//get and display the current date
var currentDay = moment().format('MMMM Do YYYY');
$("#currentDay").html(currentDay);

//set color to time blocks based on time
var compareHour = function() {
    var currentHour = moment().hours();
    
    //check current hour versus the hour of the event and color code it based on past, present, and future
    $(".time-block").each(function() {
        //if the event time has passed
        if (currentHour > this.id) {
            this.classList.add("past");
        }
        //if the event time is in the future
        else if (currentHour < this.id) {
            this.classList.add("future");
        }
        //if the event time is the current hour
        else {
            this.classList.add("present");
        }
    });
};

//save event input on button click
$(".btn").on("click", function() {

    //event text in textarea
    var event = $(this).siblings(".description").val().trim();
    //time from id attribute
    var time = $(this).parent().attr("id");

    //save to local storage
    localStorage.setItem(time, event);
});

//reload the events on the page
var loadEvents = function() {
    $(".time-block").each(function() {
        //get time id from each time block
        var time = $(this).attr("id");
        //set value for every hour if something was saved
        $("#" + time + " .description").val(localStorage.getItem(time));
    });
}

loadEvents();
compareHour();
//refresh time color code every minute
setInterval(compareHour, 60000);