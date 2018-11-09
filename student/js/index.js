$(document).ready(function () {

    $("#BtnTop").click(function () {
        $('html, body').animate({scrollTop: 0}, 'medium');
    });

    $("#BtnBiz").click(function () {
        alert("We both know that's not gonna happen, fwend!");
    });

    $('#addManufForm').on("submit", function (e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: 'addManufacturers',
            data: $("#addManufForm").serialize(),
            success: function () {
                listManuf();
            },
            error: function () {
                alert("oops");
            }
        })
    });

    $('#addCarForm').on("submit", function (e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: 'addCar',
            data: $("#addCarForm").serialize(),
            success: function () {
                listCars();
            },
            error: function () {
                alert("oops");
            }
        })
    });

});

function toHome() {
    $("#description").fadeIn(900);
    $(".contentImage").fadeIn(900);
    $("#listManuf").fadeOut(1);
    $("#listCar").fadeOut(1);
    $("#addCar").fadeOut(1);
    $("#addManuf").fadeOut(1);
    $("#cookie").fadeOut(0);
}

function listCars() {

    $("#description").fadeOut(700);
    $(".contentImage").fadeOut(700);
    $("#listCar").fadeIn(700);
    $("#listManuf").fadeOut(0);
    $("#addCar").fadeOut(0);
    $("#addManuf").fadeOut(0);
    $("#cookie").fadeOut(0);

    $.getJSON('cars', function (data) {
        var table = $('<table id="listTableCar"></table>');
        table.append('<tr><th class="listth">Name</th><th class="listth">Consumption</th><th class="listth">Color</th><th class="listth">Manufacturer</th><th class="listth">Available</th><th class="listth">Year</th><th class="listth">Horsepower</th></tr>');
        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            var nameCell = $('<td class="listtd">' + value.name + '</td>');
            var consumptionCell = $('<td class="listtd">' + value.consumption + '</td>');
            var colorCell = $('<td class="listtd">' + value.color + '</td>');
            var manufacturerCell = $('<td class="listtdH" onclick="cookieF(' + "'" + value.manufacturer + "'" + ')">' + value.manufacturer + '</td>');
            var availableCell = $('<td class="listtd">' + value.available + '</td>');
            var yearCell = $('<td class="listtd">' + value.year + '</td>');
            var horsepowerCell = $('<td class="listtd">' + value.horsepower + '</td>');
            row.append(nameCell);
            row.append(consumptionCell);
            row.append(colorCell);
            row.append(manufacturerCell);
            row.append(availableCell);
            row.append(yearCell);
            row.append(horsepowerCell);
            table.append(row)
        });
        $('#listCar').html(table);
    });

}

function listManuf() {
    $("#description").fadeOut(700);
    $(".contentImage").fadeOut(700);
    $("#listManuf").fadeIn(700);
    $("#listCar").fadeOut(0);
    $("#addCar").fadeOut(0);
    $("#addManuf").fadeOut(0);
    $("#cookie").fadeOut(0);

    $.getJSON('manufacturers', function (data) {
        var table = $('<table id="listTableManuf"></table>');
        table.append('<tr><th class="listth">Name</th><th class="listth">Country</th><th class="listth">Founded</th></tr>');
        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            var nameCell = $('<td class="listtdH" onclick="cookieF(' + "'" + value.name + "'" + ')">' + value.name + '</td>');
            var countryCell = $('<td class="listtd">' + value.country + '</td>');
            var foundedCell = $('<td class="listtd">' + value.founded + '</td>');
            row.append(nameCell);
            row.append(countryCell);
            row.append(foundedCell);
            table.append(row)
        });
        $('#listManuf').html(table);
    });
}

function addCar() {
    $("#description").fadeOut(700);
    $(".contentImage").fadeOut(700);
    $("#listManuf").fadeOut(0);
    $("#listCar").fadeOut(0);
    $("#addCar").fadeIn(700);
    $("#addManuf").fadeOut(0);
    $("#cookie").fadeOut(0);

    removeOptions(document.getElementById("dropdown"));

    $.get('manufacturerNames', function (data) {
        var count = 0;
        var $dropdown = $("#dropdown");
        $.each(data, function () {
            $dropdown.append($("<option />").val(data[count]).text(data[count]));
            count = count + 1;
        });
    });
}


function addManufacturer() {
    $("#description").fadeOut(700);
    $(".contentImage").fadeOut(700);
    $("#listManuf").fadeOut(0);
    $("#listCar").fadeOut(0);
    $("#addCar").fadeOut(0);
    $("#addManuf").fadeIn(700);
    $("#cookie").fadeOut(0);
}

function cookieF(name) {
    $("#description").fadeOut(700);
    $(".contentImage").fadeOut(700);
    $("#listManuf").fadeOut(0);
    $("#listCar").fadeOut(0);
    $("#addCar").fadeOut(0);
    $("#addManuf").fadeOut(0);
    $("#cookie").fadeIn(700);

    document.cookie = 'name=' + name;

    $.getJSON('/manufacturer', function (data) {
        var table = $('<table id="listTableCar" class="tableWithData"></table>');
        table.append('<tr><th class="listth">Name</th><th class="listth">Consumption</th><th class="listth">Color</th><th class="listth">Manufacturer</th><th class="listth">Available</th><th class="listth">Year</th><th class="listth">Horsepower</th></tr>');
        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            var nameCell = $('<td class="listtd">' + value.name + '</td>');
            var consumptionCell = $('<td class="listtd">' + value.consumption + '</td>');
            var colorCell = $('<td class="listtd">' + value.color + '</td>');
            var manufacturerCell = $('<td class="listtd">' + value.manufacturer + '</td>');
            var availableCell = $('<td class="listtd">' + value.available + '</td>');
            var yearCell = $('<td class="listtd">' + value.year + '</td>');
            var horsePowerCell = $('<td class="listtd">' + value.horsepower + '</td>');

            row.append(nameCell);
            row.append(consumptionCell);
            row.append(colorCell);
            row.append(manufacturerCell);
            row.append(availableCell);
            row.append(yearCell);
            row.append(horsePowerCell);
            table.append(row);
        });

        $('#cookie').html(table);
    });
}

function removeOptions(selectbox) {
    var i;
    for (i = selectbox.options.length - 1; i >= 0; i--) {
        selectbox.remove(i);
    }
}