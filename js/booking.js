$(document).ready(function() {
    $('#calendar').fullCalendar({
        defaultDate: "2017-11-01",
        events: {
            googleCalendarApiKey: 'AIzaSyC1-aVybRt6Ld1A23kHEe3H0pKsgxEgbao',
            googleCalendarId: 'jhpocdlbno13rep1kntd151gt0%40group.calendar.google.com',
        },
        hiddenDays: [0,6],
        //Events
        //Event Source - JavaScript - light blue
        eventSources : [{
            events: [
                {
                    title: "Javascript",
                    start: '2017-11-01T17:00:00',
                    end: '2017-11-01T18:15:00',
                    allDay: false, //Will show the time
                    color: 'lightblue',
                    textColor: 'black'
                },
                {
                    title: "Javascript",
                    start: '2017-11-08T17:00:00',
                    end: '2017-11-08T18:15:00',
                    allDay: false, //Will show the time
                    color: 'lightblue',
                    textColor: 'black'
                },
                {
                    title: "Javascript",
                    start: '2017-11-15T17:00:00',
                    end: '2017-11-15T18:15:00',
                    allDay: false, //Will show the time
                    color: 'lightblue',
                    textColor: 'black'
                },
                {
                    title: "Javascript",
                    start: '2017-11-22T17:00:00',
                    end: '2017-11-22T18:15:00',
                    allDay: false, //Will show the time
                    color: 'lightblue',
                    textColor: 'black'
                },
                {
                    title: "Javascript",
                    start: '2017-11-29T17:00:00',
                    end: '2017-11-29T18:15:00',
                    allDay: false, //Will show the time
                    color: 'lightblue',
                    textColor: 'black'
                },
                {
                    title: "Javascript",
                    start: '2017-11-13T17:00:00',
                    end: '2017-11-13T18:15:00',
                    allDay: false, //Will show the time
                    color: 'lightblue',
                    textColor: 'black'
                },
                {
                    title: "Javascript",
                    start: '2017-12-04T17:00:00',
                    end: '2017-12-04T18:15:00',
                    allDay: false, //Will show the time
                    color: 'lightblue',
                    textColor: 'black'
                },
                {
                    title: "Javascript",
                    start: '2017-11-30T17:00:00',
                    end: '2017-11-30T18:15:00',
                    allDay: false, //Will show the time
                    color: 'lightblue',
                    textColor: 'black'
                },
                //HTML and CSS
                {
                    title: "HTML & CSS",
                    start: '2017-11-01T15:30:00',
                    end: '2017-11-01T16:45:00',
                    allDay: false,
                    color: 'red',
                    textColor: 'black'
                },
                {
                    title: "HTML & CSS",
                    start: '2017-11-08T15:30:00',
                    end: '2017-11-08T16:45:00',
                    allDay: false,
                    color: 'red',
                    textColor: 'black'
                },
                {
                    title: "HTML & CSS",
                    start: '2017-11-15T15:30:00',
                    end: '2017-11-15T16:45:00',
                    allDay: false,
                    color: 'red',
                    textColor: 'black'
                },
                {
                    title: "HTML & CSS",
                    start: '2017-11-22T15:30:00',
                    end: '2017-11-22T16:45:00',
                    allDay: false,
                    color: 'red',
                    textColor: 'black'
                },
                {
                    title: "HTML & CSS",
                    start: '2017-11-29T15:30:00',
                    end: '2017-11-29T16:45:00',
                    allDay: false,
                    color: 'red',
                    textColor: 'black'
                },
                {
                    title: "HTML & CSS",
                    start: '2017-11-06T17:00:00',
                    end: '2017-11-06T18:15:00',
                    allDay: false,
                    color: 'red',
                    textColor: 'black'
                },
                {
                    title: "HTML & CSS",
                    start: '2017-11-27T17:00:00',
                    end: '2017-11-27T18:15:00',
                    allDay: false,
                    color: 'red',
                    textColor: 'black'
                },
                {
                    title: "HTML & CSS",
                    start: '2017-11-16T17:00:00',
                    end: '2017-11-16T18:15:00',
                    allDay: false,
                    color: 'red',
                    textColor: 'black'
                },

                //Python
                {
                    title: "Python",
                    start: '2017-11-06T15:30:00',
                    end: '2017-11-06T16:45:00',
                    allDay: false,
                    color: 'green',
                    textColor: 'black'
                },
                {
                    title: "Python",
                    start: '2017-11-13T15:30:00',
                    end: '2017-11-13T16:45:00',
                    allDay: false,
                    color: 'green',
                    textColor: 'black'
                },
                {
                    title: "Python",
                    start: '2017-11-20T15:30:00',
                    end: '2017-11-20T16:45:00',
                    allDay: false,
                    color: 'green',
                    textColor: 'black'
                },
                {
                    title: "Python",
                    start: '2017-11-27T15:30:00',
                    end: '2017-11-27T16:45:00',
                    allDay: false,
                    color: 'green',
                    textColor: 'black'
                },
                {
                    title: "Python",
                    start: '2017-12-04T15:30:00',
                    end: '2017-12-04T16:45:00',
                    allDay: false,
                    color: 'green',
                    textColor: 'black'
                },
                {
                    title: "Python",
                    start: '2017-11-23T17:00:00',
                    end: '2017-11-23T18:15:00',
                    allDay: false,
                    color: 'green',
                    textColor: 'black'
                },
                {
                    title: "Python",
                    start: '2017-11-02T17:00:00',
                    end: '2017-11-02T18:15:00',
                    allDay: false,
                    color: 'green',
                    textColor: 'black'
                },
                //Scratch
                {
                    title: "Scratch",
                    start: '2017-11-02T15:30:00',
                    end: '2017-11-02T16:45:00',
                    allDay: false,
                    color: 'yellow',
                    textColor: 'black'
                },
                {
                    title: "Scratch",
                    start: '2017-11-09T15:30:00',
                    end: '2017-11-09T16:45:00',
                    allDay: false,
                    color: 'yellow',
                    textColor: 'black'
                },
                {
                    title: "Scratch",
                    start: '2017-11-09T17:00:00',
                    end: '2017-11-09T18:15:00',
                    allDay: false,
                    color: 'yellow',
                    textColor: 'black'
                },
                {
                    title: "Scratch",
                    start: '2017-11-16T15:30:00',
                    end: '2017-11-16T16:45:00',
                    allDay: false,
                    color: 'yellow',
                    textColor: 'black'
                },
                {
                    title: "Scratch",
                    start: '2017-11-23T15:30:00',
                    end: '2017-11-23T16:45:00',
                    allDay: false,
                    color: 'yellow',
                    textColor: 'black'
                },
                {
                    title: "Scratch",
                    start: '2017-11-30T15:30:00',
                    end: '2017-11-20T16:45:00',
                    allDay: false,
                    color: 'yellow',
                    textColor: 'black'
                },{
                    title: "Scratch",
                    start: '2017-11-20T17:00:00',
                    end: '2017-11-20T18:15:00',
                    allDay: false,
                    color: 'yellow',
                    textColor: 'black'
                }
            ]
        }],
    });

});


