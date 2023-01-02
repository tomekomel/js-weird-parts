var g = $G('Tomasz', 'Doe');

$('#login').click(function () {
    var loginGrtr = $G('Tomasz', 'Doe');
    $('#logindiv').hide();
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});
