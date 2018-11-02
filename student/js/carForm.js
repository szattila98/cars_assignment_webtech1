$(document).ready(function () {

        $.get('manufacturerNames', function (data) {
            var count = 0;
            var $dropdown = $("#dropdown");
            $.each(data, function() {
                $dropdown.append($("<option />").val(data[count]).text(data[count]));
                count = count + 1;
            });
        });
});
