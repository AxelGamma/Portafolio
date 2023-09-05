$(document).ready(function () {
    $(".contenedor_albums_imagenes").find("img").hover(function () {
        $(this).css("box-shadow", "0px 0px 28px 1px rgba(29, 185, 84, 1)");
    }, function () {

        $(this).css("box-shadow", "none");
    });
});

$(document).ready(function () {
    // Ocultar el div al cargar la página
    $(".iframe1").hide();
    $(".iframe2").hide();
    $(".iframe3").hide();
    $(".iframe4").hide();
    $(".iframe5").hide();
    // Cuando el mouse entra en la imagen
    $(".img1").hover(function () {
        // Mostrar el div
        $(".iframe1").show();
    }, function () {
        // Cuando el mouse sale de la imagen, ocultar el div
        $(".iframe1").hide();
    });
    $(".img2").hover(function () {
        // Mostrar el div
        $(".iframe2").show();
    }, function () {
        // Cuando el mouse sale de la imagen, ocultar el div
        $(".iframe2").hide();
    });
    $(".img3").hover(function () {
        // Mostrar el div
        $(".iframe3").show();
    }, function () {
        // Cuando el mouse sale de la imagen, ocultar el div
        $(".iframe3").hide();
    });
    $(".img4").hover(function () {
        // Mostrar el div
        $(".iframe4").show();
    }, function () {
        // Cuando el mouse sale de la imagen, ocultar el div
        $(".iframe4").hide();
    });
    $(".img5").hover(function () {
        // Mostrar el div
        $(".iframe5").show();
    }, function () {
        // Cuando el mouse sale de la imagen, ocultar el div
        $(".iframe5").hide();
    });
});



