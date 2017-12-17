/*
 * Usar clases para las animaciones
 */
$(document).ready(function () {
    // CORTINILLA
    $(".mensaje").on('click', function () {
        if ($(this).hasClass('escondido')) {
            $(this).removeClass('escondido');
            $(this).addClass('desescondido');
        } else {
            $(this).removeClass('desescondido');
            $(this).addClass('escondido');
        }
    }
    );
    $('#textoEnviar').on('change keyup click', function(){
        var valor = parseInt($('#textoEnviar').val()) / 2;
        var empuje = 1280;
        empuje = 1530 - (50*valor);
        $('#imagenEstrellas2').css(
            "background-position","-"+empuje+"px 0px"
        )
    });
});

function cerrar(){
    $('.texto').removeClass('irDerecha');
    $('.texto').addClass('irIzquierda');
}
function abrir(){
    $('.texto').removeClass('irIzquierda');
    $('.texto').addClass('irDerecha');
}
