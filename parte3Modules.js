import {iniciarLibro} from "./parte1Modules.js"
import {abandonar, bucear, delfin, nadar, recogerBurbujas, perforar, descender, volverASuperficie, entrarEnSubmarino, seguirRecorriendo, volarEscotilla, enviarSeñales} from "./parte4Modules.js"
import {mostrarFinal} from "./main.js"

const divFormulario = document.querySelector(".divFormulario")

let formulario = `
<form action="" class="formulario">
    <div class="divTexto">
    </div>
    <div class="divBtns">
        <button class="btn btn1 fs-4">1</button>
        <button class="btn btn2 fs-4">2</button>
    </div>
</form>`

let divTexto
let divBtns

let btn1
let btn2

export function lucharContraCalamar () {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">El calamar te ataca. Dos tentáculos de seis metros de longitud se despegan, con sus palpitantes ventosas de succión, intentando atraparte. Abandonas la plataforma y disparas rápidamente dos arponazos, que alcanzan al calamar cerca de su monstruoso par de ojos, pero la bestia rodea tu escafandra con algunos de sus tentáculos y rompe el cierre hermético de tu traje. Disparas la última lanza del arpón con la esperanza de acertarle en un punto vulnerable. Un hilillo de agua empieza a filtrarse por tu traje. Haces señales al barco para que te icen rápidamente: «ascenso de emergencia». Tienes que haberle acertado al calamar, pues se aleja flotando sin dejar de retorcerse y agitarse. Sospechas que estás a punto de perder el conocimiento. Despiertas en la cubierta del barco, te ingresan rápidamente en la cámara de descompresión para anular el efecto de la enfermedad. Unos días después te sientes mejor y empieza a preocuparte nuevamente la idea de volver a sumergirte en los abismos marinos. <br><br> Para abandonar la expedición presioná 1. Para volver a bucear presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", abandonar)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", bucear)
}

export function subirRapido() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Empiezan a izarte rápidamente y comienzas a sentirte mareado, notas que se te debilitan los brazos y las piernas. Te sueltas de la plataforma y, agotado, te dejas arrastrar por el mar. Ves que un delfín se encamina hacia ti. Has oído decir que esos mamíferos a veces ayudan a la gente que se encuentra en dificultades. ¿Te ayudará éste a ti?. <br><br>Si intentas que el delfín te ayude presioná 1. Para seguir nadando presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", delfin)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", nadar)
}

export function dispararCarga() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Accionas la carga de propulsión especial y sales disparado aguas arriba, aterrando a todos los cardúmenes que se cruzan en tu camino. Te mareas y pierdes la noción de dónde estás. Tienes la impresión de que el mundo está al revés. Esperas que el tiburón no esté cerca. Sales a la superficie y flotas a unos 800 metros del barco. <br>Los vigías detectan tu presencia y van rápidamente a rescatarte. Lamentablemente el rápido ascenso te ha hecho enfermar de gravedad. Producir la descompresión lleva mucho tiempo. Una vez curado, el médico te informa de que no podrás volver a hacer submarinismo. Tendrá que ser otro el que encuentre la Atlántida. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function permanecerInmovil() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Esperas, inmóvil, a que el tiburón se aleje. Pero un rato después descubres que otros tiburones se acercan para participar de la cacería. Te rodean, cada vez más próximos, cada vez más rápidos. Es demasiado tarde. ¡No hay salida! <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function analizarburbujas() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Te pones el traje de buzo y, una vez fuera del submarino, utilizas tu equipo especial para analizar las burbujas. En plena tarea, golpeas torpemente la válvula que expulsa el aire comprimido necesario para que el submarino ascienda a la superficie. Como no puedes hacer nada para solucionarlo, sigues analizando las burbujas. Compruebas que contienen un alto porcentaje de oxígeno y ningún gas tóxico. Tal vez provengan de alguna zona profunda en la que pueden vivir y respirar seres humanoides. ¡Quizá provienen de la Atlántida! <br>Te preguntas si no sería conveniente utilizar el brazo perforador del submarino para agrandar la fuente productora de burbujas, y de este modo poder explorarla con la nave. Sin embargo, te preocupa el hecho de que el submarino esté perdiendo su capacidad de elevarse. Se te ocurre que también podrías intentar acumular las burbujas y usarlas para izar el submarino. <br><br>Si prefieres recoger las burbujas y llenar el depósito del submarino presioná 1. Para perforar presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", recogerBurbujas)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", perforar)
}

export function medirConSonar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Maniobras el submarino hasta el hoyo y haces mediciones con el sonar para averiguar su profundidad. Para tu sorpresa, el sonar indica que el hoyo es extraordinariamente profundo: ¡podría llegar al centro de la tierra! ¿Qué habrá allí abajo? ¿De dónde vienen las burbujas? ¿Estará la Atlántida bajo tus pies? <br>Observas en los instrumentos algo inquietante: se ha producido un terremoto de intensidad leve. El submarino no se ha estropeado, pero el terremoto podría provocar una ola sísmica en la superficie, obligando al barco a buscar una zona más segura. <br>Quizá sea peligroso que no vuelvas a la superficie y te vayas con el barco. Por otro lado, es posible que estés en la antesala de uno de los descubrimientos más grandes del mundo. <br><br>Si decides descender presioná 1. Para volver a la superficie presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", descender)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", volverASuperficie)
}

export function usarLuzLaser() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">El rayo láser ilumina toda la gruta. ¡A lo lejos, al fondo de la cueva, hay un submarino! Con mucho cuidado maniobras para acercarte. Lo identificas como el submarino que desapareció misteriosamente en el triángulo de las Bermudas hace casi un año. Este triángulo se encuentra a más de 3.200 kilómetros de distancia. <br>Aparentemente el submarino no está averiado, pero se encuentra cubierto de algas viscosas. Bellos peces nadan a su alrededor, como si se tratara de un premio especial. ¡Entonces descubres que la escotilla principal no está cubierta de algas! <br><br>Si decides entrar en el submarino presioná 1. Para seguir recorriendo la cueva presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", entrarEnSubmarino)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", seguirRecorriendo)
}

export function adentrarteEnCueva () {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Entras silenciosamente en la cueva. El techo parece ascendente y sigues su inclinación. La sonda ecoica indica que asciendes a bastante velocidad. Quizá llegues a la superficie, al aire libre. Pero el techo de la gruta deja de estar inclinado hacia arriba. Ante tus ojos aparece una escotilla metálica perfectamente redondeada, hecha con un metal que nunca habías visto. Intentas abrirla con el brazo mecánico del submarino. La escotilla no cede. Envías señales de radio a la puerta, con la esperanza de ponerte en contacto con el otro lado. <br><br>Si decides hacer volar la escotilla con una carga explosiva presioná 1. Para seguir enviando señales por radio presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", volarEscotilla)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", enviarSeñales)
}