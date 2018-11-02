$(document).ready(function () {

    $("#BtnTop").click(function () {
        $('html, body').animate({scrollTop: 0}, 'medium');
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

        $.getJSON('manufacturers', function (data) {
            var table = $('<table id="listTableManuf"></table>');
            table.append('<tr><th class="listth">Name</th><th class="listth">Country</th><th class="listth">Founded</th></tr>');
            $.each(data, function (key, value) {
                var row = $('<tr></tr>');
                var nameCell = $('<td class="listtd">' + value.name + '</td>');
                var countryCell = $('<td class="listtd">' + value.country + '</td>');
                var foundedCell =  $('<td class="listtd">' + value.founded + '</td>');
                row.append(nameCell);
                row.append(countryCell);
                row.append(foundedCell);
                table.append(row)
            });
            $('#listManuf').html(table);
        });
    });

    $("#menuTable td:contains('List Cars')").click(function () {
        $("#description").fadeOut(700);
        $(".contentImage").fadeOut(700);
        $("#listCar").fadeIn(700);
        $("#listManuf").fadeOut(0);

        $.getJSON('cars', function (data) {
            var table = $('<table id="listTableCar"></table>');
            table.append('<tr><th class="listth">Name</th><th class="listth">Consumption</th><th class="listth">Color</th><th class="listth">Manufacturer</th><th class="listth">Available</th><th class="listth">Year</th><th class="listth">Horsepower</th></tr>');
            $.each(data, function (key, value) {
                var row = $('<tr></tr>');
                var nameCell = $('<td class="listtd">' + value.name + '</td>');
                var consumptionCell = $('<td class="listtd">' + value.consumption + '</td>');
                var colorCell =  $('<td class="listtd">' + value.color + '</td>');
                var manufacturerCell =  $('<td class="listtd">' + value.manufacturer.toString() + '</td>');
                var availableCell =  $('<td class="listtd">' + value.available + '</td>');
                var yearCell =  $('<td class="listtd">' + value.year + '</td>');
                var horsepowerCell =  $('<td class="listtd">' + value.horsepower + '</td>');
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
    });

});