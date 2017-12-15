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
});

function cerrar(){
    $('.texto').removeClass('irDerecha');
    $('.texto').addClass('irIzquierda');
}
function abrir(){
    $('.texto').removeClass('irIzquierda');
    $('.texto').addClass('irDerecha');
}