(function ($) {
    $(function () {

        //initialize all modals
        $('.modal').modal();

        //now you can open modal from code
        $('#modal1').modal('open');

        //or by click on trigger
        $('.trigger-modal').modal();

    }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function() {
    $('#calendar').fullCalendar({
        events: {
            googleCalendarApiKey: 'AIzaSyC1-aVybRt6Ld1A23kHEe3H0pKsgxEgbao',
            googleCalendarId: 'jhpocdlbno13rep1kntd151gt0%40group.calendar.google.com',
        }
    });

});
