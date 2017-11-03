

    $(document).ready(function () {
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

        $('.aboutNavBtn').click(function () {
            $('#body').load('about.html');
        });

        $('.htmlCssBTN').click(function () {
            $('#body').load('HTMLCSS.html');
        });
<<<<<<< HEAD

=======
        $('.javascriptBTN').click(function () {
            $('#body').load('Javascript.html');
        });
        $('.pythonBTN').click(function () {
            $('#body').load('python.html');
        });
        $('.scratchBTN').click(function () {
            $('#body').load('scratch.html');
        });
>>>>>>> LanguagePagewGames

        $(".dropdown-button").dropdown({
            hover: true
        });
    })

