$(document).ready(function () {

    $("#BtnTop").click(function () {
        $('html, body').animate({scrollTop: 0}, 'fast');
    });

    $("#BtnBiz").click(function () {
        alert("We both know that's not gonna happen, fwend!");
    });

    $("#banner").click(function () {
        $("#description").fadeIn(900);
        // $("#otherPart").show();
        $(".contentImage").fadeIn(900);
        $("#listManuf").fadeOut(1);
        $("#listCar").fadeOut(1);
    });

    $("#menuTable td:contains('List Manufacturers')").click(function () {
        $("#description").fadeOut(700);
        $(".contentImage").fadeOut(700);
        $("#listManuf").fadeIn(700);
        $("#listCar").fadeOut(0);
    });

    $("#menuTable td:contains('List Cars')").click(function () {
        $("#description").fadeOut(700);
        $(".contentImage").fadeOut(700);
        $("#listCar").fadeIn(700);
        $("#listManuf").fadeOut(0);
    });
});