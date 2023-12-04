## User name
axelhgbryan

## Password
7DdvhdrD4EqypWfs

## Cambios formulario

<!-- Formulario de contactanos -->
        <section id="Contactanos">
            <h2>Contacto</h2>
            <!-- Con la etiqueta form le decimos al html que todo lo de adentro de de un formulario -->
            <form class="formulario">
                <!-- Cuando queramos darle indicaciones a los usuarios podemos utilizar un legend-->
                <fieldset>
                    <!-- Podemos ir agrupando con un div cada label y su input -->
                    <legend>Contactanos llenando todos los campos</legend>
                    <!-- Tenemos el atributo label que es el nombre de la etiqueta el cual tiene seguido un input -->
                    <div class="contenedor-campos">
                        <div class="campo">
                            <label>Nombre</label>
                            <input class="input-text" type="text" placeholder="Nombre">
                            <!-- Aqui es donde nosotros vamos a introducir datos -->
                            <!-- Los input tienes diferentes type -->
                            <!-- Con placeholder podemos por un texto guia -->
                        </div>
                        <div class="campo">
                            <label>Telefono</label>
                            <input class="input-text" type="tel" placeholder="Telefono">
                        </div>
                        <div class="campo">
                            <label>Correo</label>
                            <input class="input-text correo" type="email" placeholder="Email">
                        </div>
                        <div class="campo">
                            <label>Mensaje</label>
                            <textarea class="input-text"></textarea>
                        </div>
                    </div>
                    <div class="alinear-derecha flex">

                        <button class="contenedorBotones formularioSession" type="submit">
                            Enviar
                        </button>
                    </div>
                </fieldset>
            </form>
        </section>

## Barra de busqueda
    <!-- Barra de busqueda -->
    <section class="busqueda">
        <div class="busqueda-container">
            <form action="">
                <input type="text" id="inputBusqueda" placeholder="Cubito">
                <button class="izqubtn" type="submit" id="btnbuscarclick">Buscar</button>
                <button class="derbtn" type="button" id="btnBuscar">Voz</button>
            </form>
        </div>
    </section>

