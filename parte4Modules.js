import {iniciarLibro, salirDelSubmarino} from "./parte1Modules.js"
import {barcoGriego, comunicarHallazgo, volverASumergirte, renunciar, explorar, salirASuperficie, serAtlante, correr, pasadizoSecreto, volverAlSubmarino, seguirInvestigando, retroceder} from "./parte5Modules.js"
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

export function abandonar () {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Con gran pesar, resuelves que lo más sensato es abandonar la expedición. No puedes arriesgarte a volver ahora a las profundidades. Aunque a regañadientes, regresas a Estados Unidos. <br>Te invitan a hablar de tus aventuras en varios programas de televisión. Durante el transcurso de uno de ellos interrumpen tu relato para dar al mundo una noticia de última hora: el descubrimiento de la Atlántida. Lamentas haber tomado la decisión de abandonar cuando lo hiciste, pero en realidad no tenías otra opción, ¿verdad? <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function bucear () {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Eres incapaz de resistirte a la aventura submarina. Tienes que volver a bajar; después de unas semanas de descanso, te introduces en el submarino y te hundes rápidamente. Después de ponerte el traje especial, te decides a sondear las profundidades.  No hay rastros del calamar gigante y te sientes seguro. <br>Rodeas una formación rocosa y das con los restos del naufragio de un antiguo barco griego. Te resulta extraño descubrir un barco intacto a tanta distancia de la superficie. ¿Qué lo llevó hasta allí? ¿Estaría visitando la Atlántida antes de que el continente se hundiera? <br>Tornas fotografías y escribes unas notas en tu libreta submarina. Tal vez ese antiguo barco guarda el secreto de la Atlántida. <br><br>Si entras en el barco griego presioná 1. Si decides volver y comunicar tu hallazgo presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", barcoGriego)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", comunicarHallazgo) 
}

export function delfin() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">El delfín te observa, e incluso crees que te sonríe. Te aferras a una de sus aletas y el delfín, con un enérgico movimiento de todo su cuerpo, nada en sentido ascendente. Poco después sales a la superficie. Parpadeas a causa del brillo del sol. El barco no está a la vista. Estás perdido mar adentro. <br>El delfín se zambulle, llevándote a rastras. Acelera, y 20 minutos después te encuentras junto al barco. Seguramente el delfín oyó los motores del buque científico. <br>En cuanto estás a bordo todos te felicitan. Volverás a sumergirte, pero te persigue una idea: ¿qué ocurrirá si te abandona la buena suerte? <br><br>Si decides volver a sumergirte al dia siguiente presioná 1. Para renunciar presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", volverASumergirte)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", renunciar)
}

export function nadar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">El delfín podría ayudarte, pero también podría no hacerlo. Decides correr el riesgo de arreglarte por tu cuenta. Nadas en dirección a la superficie. El delfín te sigue un rato y luego se aleja. Te tomas un descanso a unos 9 metros por debajo de la superficie, antes de iniciar el ascenso final. <br>En ese momento ves que se acerca un pez enorme, feísimo, lleno de protuberancias, hinchado y cubierto de marcas negras y blancas. Fija en ti sus ojos saltones. Es un gran mero, un pez que no se molesta en morder a sus víctimas, pues se las traga enteras de un solo bocado. Evidentemente serás su próxima comida. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function recogerBurbujas() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Logras recoger los gases burbujeantes y llenar los depósitos del submarino en cantidad suficiente como para que la nave pueda elevarse. ¡En el preciso instante en que llegas al saliente de lo alto del cañón, divisas algo semejante a un viejo camino! Las rocas que lo bordean parecen ser contracarriles. ¿Será un sendero que conduce a la ciudad perdida de la Atlántida? Anclas el submarino y te dispones a investigar de cerca. <br><br>Presioná 1 o 2 para continuar. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", salirDelSubmarino)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", salirDelSubmarino)
}

export function perforar () {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">El torrente de burbujas aumenta cuando empiezas a perforar. Ahora es lo bastante fuerte para llegar a la superficie de las aguas. Podrías intentar salir a la superficie para localizar la posición exacta del área burbujeante. Después harías planes con los científicos del barco para decidir el paso siguiente. Claro que también podrías explorar ahora mismo el hueco, con ayuda del submarino, para averiguar cuál es el origen de las burbujas. Sabes que es un riesgo entrar en la cavidad, pero podría conducirte a la fuente de las burbujas y quizás a la Atlántida. <br><br>Para explorar presioná 1. Para salir a la superficie presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", explorar)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", salirASuperficie)
}

export function descender() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Es el momento de tomar una decisión. Verificas todos los controles del submarino, aprietas los dientes y accionas la palanca de control hasta la posición de inmersión profunda. Desciendes hasta donde ninguna persona se ha aventurado nunca. El submarino es apropiado para bajar a grandes profundidades, pero ahora lo hace a toda velocidad. <br>La presión es intensa, la oscuridad total y el calibrador de profundidad marca una cifra increíble: 25 kilómetros. Inviertes de inmediato la palanca de control. En el panel parpadean las luces de advertencia: indican que ahora las fuerzas de gravitación son más potentes que los motores de propulsión del submarino. Has cruzado el punto de no retorno y tu viaje descendente continuará en la más profunda oscuridad hasta que la presión del agua sea excesiva para el submarino. Este es tu último viaje. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function volverASuperficie() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Con mucho cuidado haces retroceder al submarino hasta el cañón. Sin previo aviso, el submarino se ve atrapado por una fuerte corriente que lo arrastra hacia una cueva. Una vez en el interior, la corriente lo empuja hacia una gran puerta metálica. El submarino es arrastrado al interior. La puerta se cierra, la cueva se desagua y sales del submarino para pasar a una cámara que es obra de manos humanas. Se abre una puerta en la pared y aparecen dos personas vestidas con sencillez que se acercan hacia ti. Una de ellas te dice: <br>- Bienvenido a la Atlántida. Te esperábamos. ¡Qué descubrimiento! Has encontrado el continente perdido y su antigua civilización. Aquellas dos personas te informan de que no se permite la salida de nadie que haya dado con su continente. Los atlantes no son crueles, pero temen que se descubra su mundo. <br>Te piden que los sigas y aceptas, aunque tu idea es otra. Existe la posibilidad de que intentes salir de la cámara mediante una descarga del cañón laser del submarino. <br><br>Si decides seguirlos y unirte a la sociedad atlante presioná 1. Para correr hacia el submarino y hacer volar la puerta con el cañon láser presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", serAtlante)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", correr)
}

export function entrarEnSubmarino() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">El submarino es realmente misterioso. Te has puesto el traje de buzo. Abres la escotilla de la torreta y entras. Todo está sorprendentemente limpio y ordenado. <br>Una voz salida de la nada empieza a contarte que miles de años atrás los dirigentes de la Atlántida se dieron cuenta de que su continente se estaba hundiendo en el mar. Descubrieron una enorme caverna subterránea y construyeron nuevos tipos de alojamiento para sus habitantes. Más adelante, cuando la Atlántida estaba profundamente hundida bajo el mar, sus científicos descubrieron y perfeccionaron una operación que les permitió respirar bajo el agua.  <br>La voz, que suena amistosa, te informa de que en la Atlántida hay dos grupos: uno bueno y otro malo. La voz te invita a pasar al mundo de la Atlántida y te da instrucciones para llegar a un pasadizo secreto que comunica con la ciudad sumergida. <br>Mientras sigues las indicaciones divisas a hurtadillas una increíble nave submarina con varias personas en su interior. Tiene que ser una nave atlante, pero no puedes saber si esa gente pertenece al grupo de los buenos o de los malos. ¿Conocen la existencia del pasadizo secreto? <br><br>Si decides entrar en el pasadizo secreto presioná 1. Para volver al submarino presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", pasadizoSecreto)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", volverAlSubmarino)
}

export function seguirRecorriendo() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Recorres la cueva, pasas junto a los restos del submarino y detectas los restos de otro naufragio. Más allá hay otro. Todos están cubiertos de algas, pero no parecen estropeados. Quizá los atlantes atrapan barcos en el triángulo de las Bermudas y los llevan a ese lugar. Te domina la curiosidad. Te pones el traje de buzo. Abandonas el submarino y avanzas para inspeccionar. De pronto aparece por detrás de ti una serpiente marina mortalmente venenosa, de 4 metros de largo, y te muerde en la mano. No existe ningún antídoto para su veneno letal. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function volarEscotilla() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">La única forma de llegar al otro lado de la puerta es volarla, o al menos eso supones. El cañón láser del submarino es muy potente y lo pones en posición de disparar. Pulsas el mando y disparas un potente rayo en dirección a la escotilla. Nada ocurre. Sitúas el mando del cañón en fuerza de emergencia. Vuelves a pulsar el botón y el rayo destruye al instante la escotilla. Un aluvión de agua de mar penetra por el gigantesco agujero y te arrastra hasta una caverna llena de aire. El agua inunda la caverna en un instante y con fuerza explosiva. Observas que varias personas corren hacia unas escotillas de salida. ¡Es demasiado tarde! Cometiste un error. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function enviarSeñales() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Tus transmisiones no producen ningún resultado y te cansas de enviar señales a través de la puerta herméticamente cerrada. Estás a punto de renunciar cuando la puerta se abre de par en par, dejando a la vista una caverna con otra puerta. Entras con mucha cautela y una vez en el interior recibes una señal por radio. El mensaje dice que eres bienvenido, pero que si entras jamás podrás retomar a la faz de la tierra. Tienes que tomar una decisión. <br><br>Para seguir investigando presioná 1. Para retroceder presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", seguirInvestigando)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", retroceder)
}