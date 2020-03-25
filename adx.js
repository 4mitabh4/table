$(document).ready(function () {
    $.getJSON("test.json", function (data) {
        var x = '';
        $.each(data, function (key, value) {
            x += '<tr>';
            x += '<td>' + value.sl_no + '</td>';
            x += '<td>' + value.name + '</td>';
            x += '<td>' + value.c_case_n + '</td>';
            x += '<td>' + value.c_case_i + '</td>';
            x += '<td>' + value.cured + '</td>';
            x += '<td>' + value.death + '</td>';
        });
        $('#table').append(x);
    });
});