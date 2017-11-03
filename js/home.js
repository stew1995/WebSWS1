$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('#loginModal').modal();
    $('#registerModal').modal();
});

$('.languagesNavBtn').click(function () {
    $('#body').load('language.html');
});

$('.htmlCssBTN').click(function () {
    $('#body').load('HTMLCSS.html');
});

$('.javascriptBTN').click(function () {
    $('#body').load('Javascript.html');
});
$('.pythonBTN').click(function () {
    $('#body').load('python.html');
});
$('.scratchBTN').click(function () {
    $('#body').load('scratch.html');
});
