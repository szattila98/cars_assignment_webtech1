$(document).ready(function () {

    $("#BtnTop").click(function () {
        $('html, body').animate({scrollTop: 0}, 'fast');
    });

    $("#BtnBiz").click(function () {
        alert("We both know that's not gonna happen, fwend!");
    });
});