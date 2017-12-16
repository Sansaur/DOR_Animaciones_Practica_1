/*
 * Usar clases para las animaciones
 */
$(document).ready(function () {
    // ROTACIONES
    $("#rotacion").find("p").first().hover(function () {
        $("#rotacion").find("p").first().addClass("rotacionP2");
    },function () {
        $("#rotacion").find("p").first().removeClass("rotacionP2");
        $("#rotacion").find("p").first().addClass("normal2");
    });
    $("#rotacion").find("p").first().on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        if($("#rotacion").find("p").first().hasClass('rotacionP2')){
            $("#rotacion").find("p").first().removeClass("normal");
            $("#rotacion").find("p").last().addClass("rotacionP");
        } else {
            $("#rotacion").find("p").first().addClass("normal");
            $("#rotacion").find("p").last().removeClass("rotacionP");
        }
    });
    // CARTAS
    $("#cartas").children().click(function () {
        $(this).addClass("rotacionTotal");
    });
    $("#cartas").children().on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        $(this).removeClass("rotacionTotal");
        if ($(this).next(".carta").length) {
            $(this).next(".carta").addClass("rotacionTotal");
        } else {
            $(this).parent().find(".carta").first().addClass("rotacionTotal");
        }
    });
    // CORTINILLA
    $("#cortinilla").on('click', 'p', function () {
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
