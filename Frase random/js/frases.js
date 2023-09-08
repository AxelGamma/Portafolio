let frases = ["Mejor fuera que dentro. Es lo que digo, ¿eh, Fiona?", "Imagínatelo, la semana que viene volveremos a casa. A nuestra cabaña llena de bichos e invadida por los hongos. Y en el aire, ese aroma a putrefacción. -¡Cómo sabes tocarme la fibra sensible!.", "No importa todo lo que la gente diga de ti, lo que importa es lo que tú crees que eres.", "Después de un tiempo, aprenderás a ignorar lo que la gente te llama y aprenderás a confiar en quien realmente eres.", "No sabía lo que tenía hasta que lo perdí.", "Sé lo que se siente cuando uno cree que no está listo para algo. Sí, los ogros también nos asustamos, aunque sea de vez en cuando.", "Todo el mundo creía que yo era un monstruo y, durante mucho tiempo, los tomaba en serio. Pero con los años, aprendes a ignorar los motes que te ponen los demás...", "Sabes, Asno. A veces las cosas son más de lo que aparentan."];

$(document).ready(function () {
    $(".contenedor_imagenPersonaje").find(".imagen").hover(function () {
        $(this).css("box-shadow", "0px 0px 10px 5px #43DDE5");
    }, function () {
        $(this).css("box-shadow", "none");
    });
});

//jquery para cuando clickemos la imagen aparezca una frase aleatoria en el label con class entrada
/* $(document).ready(function () {
    $(".contenedor_imagenPersonaje").find(".imagen").click(function () {
        let frase = frases[Math.floor(Math.random() * frases.length)];
        $(".entrada").text(frase);
    });
}
); */
//Aplicando lo mismo pero ahora con mouseover
$(document).ready(function () {
    $(".contenedor_imagenPersonaje .imagen").mouseover(function () {
        let frase = frases[Math.floor(Math.random() * frases.length)];
        $(".entrada").text(frase);
    });
});



