$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('#loginModal').modal();
    $('#registerModal').modal();
});

$('.languagesNavBtn').click(function () {
    $('#body').load('language.html');
});