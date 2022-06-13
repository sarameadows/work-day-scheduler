//get and display the current date
var currentDay = moment().format('MMMM Do YYYY');
$("#currentDay").html(currentDay);

//set color to time blocks based on time
var compareHour = function() {
    var currentHour = moment().hours();
    console.log(currentHour);
    //check current hour versus the hour of the event and color code it based on past, present, and future
    $(".time-block").each(function() {
        //if the event time has passed
        if (currentHour > this.id) {
            this.classList.add("bg-secondary");
        }
        //if the event time is in the future
        else if (currentHour < this.id) {
            this.classList.add("bg-success");
        }
        //if the event time is the current hour
        else {
            this.classList.add("bg-danger");
        }
    });
};

compareHour();