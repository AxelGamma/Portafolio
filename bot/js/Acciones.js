/**
 * @author Jorge Castro
 */
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    function inicializar_personaje() {
        var random;
        var stage = new PIXI.Stage(0xffffff); //fondo
        var renderer = PIXI.autoDetectRenderer(295, 360); //dimensiones del cuadro de visualizacion
        $("#charContainer").append(document.body.appendChild(renderer.view));//AÑADIENDO AGENTE CON PIXI A DIV CONTENEDOR

        //ojos
        var ojoDerInicial = [];
        ojoDerInicial.push(new PIXI.Point(0, 0));
        ojoDerInicial.push(new PIXI.Point(0, 100));
        var ojoIzqInicial = [];
        ojoIzqInicial = clone(ojoDerInicial);

 
        var cejaDerInicial = [];

        cejaDerInicial.push(new PIXI.Point(0, 100));
        cejaDerInicial.push(new PIXI.Point(350, 60));
        var cejaIzqInicial = [];
        cejaIzqInicial = clone(cejaDerInicial);

        var cabeza = PIXI.Sprite.fromImage("img/head.png");
        var ojoDer = new PIXI.Rope(PIXI.Texture.fromImage("img/ojoDer.png"), ojoDerInicial);
        var ojoIzq = new PIXI.Rope(PIXI.Texture.fromImage("img/ojoIzq.png"), ojoIzqInicial);

        var cejaDer = new PIXI.Rope(PIXI.Texture.fromImage("img/cejaDer.png"), cejaDerInicial);
        var cejaIzq = new PIXI.Rope(PIXI.Texture.fromImage("img/cejaIzq.png"), cejaIzqInicial);

        var nariz = PIXI.Sprite.fromImage("img/nariz.png");
        var boca = PIXI.Sprite.fromImage("img/boca.png");
        // Tamaño del canvas del ojo derecho
        ojoDer.scale.x = 0.060;
        ojoDer.scale.y = 0.30;
        // Tamaño del canvas del ojo izquierdo
        ojoIzq.scale.x = 0.060;
        ojoIzq.scale.y = 0.30;
        // Tamaño del canvas del ceja derecho
        cejaDer.scale.x = 0.20;
        cejaDer.scale.y = 0.40;
        // Tamaño del canvas del ceja izquierdo
        cejaIzq.scale.x = 0.20;
        cejaIzq.scale.y = 0.39;
        // Tamaño del canvas de la nariz
        nariz.scale.x = 0.10;
        nariz.scale.y = 0.10;
        //Posicionanado la boca
        nariz.position.x = 99;
        nariz.position.y = 190;
        // Tamaño del canvas de la boca
        boca.scale.x = 0.40;
        boca.scale.y = 0.50;
        //Posicionanado la boca
        boca.position.x = 106;
        boca.position.y = 282;


        ojoDer.position.x = 190;
        ojoDer.position.y = 147;

        ojoIzq.position.x = 105;
        ojoIzq.position.y = 147;

        cejaDer.position.x = 155;
        cejaDer.position.y = 112;
        cejaIzq.position.x = 70;
        cejaIzq.position.y = 100;

        //rotar ceja izquierda 2 grados
        cejaIzq.rotation = 0.1;

        //que es anchor.set?

        /* nariz.anchor.set(-3.9, -7.8); */
        /* boca.anchor.set(-4.2, -64.5); */

        var char = new PIXI.DisplayObjectContainer();

        char.addChild(cabeza);
        char.addChild(ojoDer);
        char.addChild(ojoIzq);
        char.addChild(cejaDer);
        char.addChild(cejaIzq);
        char.addChild(nariz);
        char.addChild(boca);

        stage.addChild(char);
        renderer.render(stage);

        setInterval(function () {
            parpadeo(ojoDerInicial, ojoIzqInicial, renderer, stage);
            random = Math.random() * 10;
            if (random > 5) {
                mover_cejas_arriba(cejaDerInicial, cejaIzqInicial, renderer, stage);
            } else {
                reestablecer_cejas(cejaDerInicial, cejaIzqInicial, renderer, stage);
            }
        }, 2000);
    }

    async function parpadeo(ojoDerInicial, ojoIzqInicial, renderer, stage) {
        var tiempo = 1;

        //parpadeo descendente
        ojoDerInicial[0].y = 122;
        ojoDerInicial[1].y = 245;
        ojoIzqInicial[0].y = 122;
        ojoIzqInicial[1].y = 245;
        renderer.render(stage);

        await waitforme(tiempo);

        ojoDerInicial[0].y = 235;
        ojoDerInicial[1].y = 245;
        ojoIzqInicial[0].y = 235;
        ojoIzqInicial[1].y = 245;
        renderer.render(stage);

        await waitforme(tiempo);

        //parpadeo ascendente
        ojoDerInicial[0].y = 122;
        ojoDerInicial[1].y = 245;
        ojoIzqInicial[0].y = 122;
        ojoIzqInicial[1].y = 245;
        renderer.render(stage);

        await waitforme(tiempo);

        ojoDerInicial[0].y = 0;
        ojoDerInicial[1].y = 245;
        ojoIzqInicial[0].y = 0;
        ojoIzqInicial[1].y = 245;
        renderer.render(stage);
    }

    function mover_cejas_arriba(cejaDerInicial, cejaIzqInicial, renderer, stage) {
        cejaDerInicial[0].y = 0;
        cejaIzqInicial[1].y = 0;
        renderer.render(stage);
    }

    function reestablecer_cejas(cejaDerInicial, cejaIzqInicial, renderer, stage) {
        cejaDerInicial[0].y = 50;
        cejaIzqInicial[1].y = 60;
        renderer.render(stage);
    }

    function waitforme(millisec) {
        return new Promise(resolve => {
            setTimeout(() => { resolve('') }, millisec);
        })
    }

    function clone(A) {
        B = []
        for (var i = 0; i < A.length; i++) {
            B.push(A[i].clone());
        }
        return B;
    }

    inicializar_personaje();
});

//var ojoDer = PIXI.Sprite.fromImage("img/ojoDer.png");
//var ojoDer_Text = PIXI.Texture.fromImage("img/ojoDer.png");

//var ojoDer = new PIXI.Sprite(ojoDer_Text);
//ojoDer.anchor.set(-3.4,-3.15);