$(document).ready(function() {
    $('#calendar').fullCalendar({
        events: {
            googleCalendarApiKey: 'AIzaSyC1-aVybRt6Ld1A23kHEe3H0pKsgxEgbao',
            googleCalendarId: 'jhpocdlbno13rep1kntd151gt0%40group.calendar.google.com',
        },
        hiddenDays: [0,6],
        //Events
        eventSources : [{
            events: [
                {
                    title: "Javascript",
                    start: '2017-10-20T15:30:00',
                    end: '2017-10-20T16:45:00',
                    allDay: false //Will show the time
                },
                {
                    title: "Javascript",
                    start: '2017-10-20T17:00:00',
                    end: '2017-10-20T18:15:00',
                    allDay: false //Will show the time
                }
            ],
            color: 'lightblue',     // an option!
            textColor: 'black' // an option!
        }]

    });

});
