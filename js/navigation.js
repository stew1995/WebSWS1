$(".button-collapse").sideNav();


    $('#body').load('home.html');

    $('.bookingNavBtn').click(function () {
        $('#body').load('booking.html');
    });
    $('.homeNavBtn').click(function () {
        $('#body').load('home.html');
    });

    $('.newsNavBtn').click(function () {
        $('#body').load('news.html');
    });

    $('.languagesNavBtn').click(function () {
        $('#body').load('language.html');
    });

