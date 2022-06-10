import {iniciarLibro} from "./parte1Modules.js"
import {abandonar} from "./parte4Modules.js"
import {seguirViaje, volver3, aceptarInyeccion, rechazarInyeccion, nuevaExpedicion, retirarse, volverABucear, trazarPlan, salirNadando, vortice, escaparDeNodores, aceptar, quedarte, escaparDeAtlantes, aceptarPropuesta, negarse, serJefe, huir, ballena, queHacer} from "./parte7Modules.js"
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

export function hoyo() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">¿Por qué no bajar? ¡Es increíble! ¡El centro de la tierra! Empujas hacia adelante la palanca de mando y te sumerges. Al poco tiempo ya no hay agua: estás rodeado por un gas pesado que actúa de la misma manera que aquélla. De repente tropiezas con una masa pegajosa, que casi obstruye los propulsores de submarino. En ese momento el motor se detiene y te ves arrojado a través de la materia semilíquida por algo semejante a la fuerza de la gravedad y al magnetismo. Pasas por una densa membrana elástica y entras en una zona de gigantescos átomos. Los electrones giran a tu alrededor a gran velocidad, pero hay mucho lugar para maniobrar entre las partículas. Los electrones ruedan alrededor de una pequeña masa que, como sabes, se llama núcleo. Logras evitar choques con los electrones. ¡Qué mundo! Tal vez estás sufriendo alucinaciones. <br><br>Si decides continuar viaje al centro de la tierra presioná 1. Si decides volver presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", seguirViaje)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", volver3)
}

export function volver() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Piensas que es demasiado peligroso bucear en un hoyo profundo que puede conducir al centro de la tierra. Lo más sensato será volver a la superficie y trazar un plan de acción. <br>Echas una última mirada a la abertura, controlas los instrumentos del submarino e inicias el ascenso. Por fin la nave llega al aire fresco y a la luz del sol; aguardas hasta que el barco te recoge. <br><br>Para continuar presioná 1 o 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", abandonar)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", abandonar)
}

export function seguir() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Te conducen al interior de una inmensa caverna, en cuyo centro ves una enorme máquina plateada. Es una especie de tubo largo con varios paneles redondos adosados a un extremo. <br>Te hacen entrar. Es la sala de control más moderna que hayas visto en tu vida. Ante ti aparece una figura de forma extraña, con una cabeza muy grande y los ojos huecos. <br>    - Ahora estás en la sala de controles de la Atlántida. Ya conoces nuestro secreto. Hemos aterrizado en este planeta hace 3.000 años. Utilizamos nuestro artilugio antimateria para hundir este continente bajo el mar y así huir de los tuyos. Si lo deseas puedes llevar aquí una vida útil y agradable. Basta que nos dejes inyectarte un suero que te permitirá vivir aquí. La decisión queda en tus manos. Por otro lado, si no quieres ser uno de nosotros, te haremos prisionero. <br><br>Si aceptas la inyección presioná 1. Si la rechazas presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", aceptarInyeccion)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", rechazarInyeccion)
}

export function volver2() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Los tres atlantes captan tu deseo de regresar a la superficie. Al instante hacen aparecer una cápsula en forma de burbuja y te ponen en su interior. <br>    - Adiós, terráqueo. Ojalá tu vida sea larga y prospera. <br>Sales disparado a través de las aguas y emerges en la superficie, cerca del barco. La cápsula que te protegía se desintegró al llegar a la superficie. <br>A bordo del barco, cuentas tu aventura a la tripulación y a los científicos. Todos son amables contigo, pero nadie te cree. <br>A tu regreso a Estados Unidos realizas una serie televisiva en la que hablas de la Atlántida. Escribes algunos artículos y un libro. Te pagan mucho dinero por estos trabajos, dinero que te sientes tentado a emplear en otra expedición. <br><br>Si inviertes el dinero en otra expedición presioná 1. Si te retiras y vives una vida cómoda presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", nuevaExpedicion)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", retirarse)
}

export function esforzarte() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Estás mareado por la falta de oxígeno y por la fatiga. Con el cuchillo cortas las densas algas que te rodean. Vas liberándote poco a poco. Repentinamente sales disparado a través de los restos de algas marinas y asomas a la superficie. Disparas el cohete de señales y poco después te divisa la tripulación del barco. Al poco rato estás a bordo, sano y salvo, rodeado de amigos. ¡Qué alivio haber salido de aquel mundo de pesadilla! <br><br>Si al día siguiente vuelves a bucear presioná 1. Si descansas y esperas unos días para trazar un plan de emergencia presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", volverABucear)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", trazarPlan)
}

export function descansar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Lo peor que podrías hacer es caer presa del pánico. Te relajas y te dejas llevar por la corriente, que de repente te arrastra hacia arriba. Con el cuchillo cortas las algas y recuperas la libertad. ¡Qué alivio! <br>Pero en cuanto sales de las algas te ves atrapado en el vórtice de un gigantesco remolino. <br><br>Si intentas salir nadando del remolino presioná 1. Si te sumerges en el vórtice del remolino con la esperanza de tocar fondo y salir presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", salirNadando)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", vortice)
}

export function unirteANodores() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">    - Quiero ir con los nodores - le informas a tu guía. <br>El hombre barbudo te conduce a las afueras de la ciudad. <br>    - Ahora debemos separamos. Buena suerte. <br>Los nodores envían un destacamento de recepción fuertemente armado. Sospechan de ti y creen que eres un espía de los atlantes. Su aspecto es exactamente igual al de éstos, pero rara vez sonríen. <br>    - Ven. Tenemos que interrogarte. Quizá trabajarás para nosotros. <br>Durante tres días te interrogan, sin permitirte salir de una pequeña habitación sin ventanas. No son nada afables y sospechas que has cometido un error. Te piden que les ayudes a espiar a los atlantes. Insinúan que en tu condición de espía podrás pasar libremente de un grupo a otro. <br><br>Si decides escapar presioná 1. Si decides aceptar presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", escaparDeNodores)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", aceptar)
}

export function quedarteConAtlantes() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Decides quedarte con los atlantes. Su estilo de vida te parece ideal. Pasan el tiempo creando cosas en defensa de la vida y ninguna para destruirla. Te parece que su líder dice la verdad cuando insiste en que hay que evitar la guerra y no fomentar el odio. <br>Te fascina ese mundo aparentemente ideal. Quisieras quedarte para investigar la historia que llevó a la Atlántida a ser lo que es, y averiguar la causa de la escisión entre los atlantes y los nodores. No obstante, en el fondo de tu mente se asienta la esperanza de escapar para volver a tu propio mundo. <br><br>Si decides quedarte presioná 1. Si decides escapar presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", quedarte)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", escaparDeAtlantes)
}

export function buscarGobernantes() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">No te lleva mucho tiempo encontrar al rey. Lo encuentras en una habitación pequeña y sencilla, en cuyo techo brilla un extraño destello. <br>    - Así que finalmente has encontrado el camino. Quédate tranquilo, no te haré daño - te sobresalta la resonante voz del rey. A continuación te invita a tomar asiento. <br>Después de varias horas de conversación, piensas que el rey es inteligente y amable. Quizá los atlantes se hayan equivocado en su juicio. <br>El rey te ofrece la posibilidad de participar en su gobierno. Te dice que la mayor parte de su pueblo es gente perezosa y egoísta que necesita ser gobernada con autoridad. Ha sido rey durante casi mil años y ha sobrevivido porque no tiene miedo a ser severo. Ahora quiere que formes parte de su equipo como consejero. <br><br>Si decides aceptar la propuesta del rey presioná 1. Si te niegas presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", aceptarPropuesta)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", negarse)
}

export function ayudarAEscapar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">El problema está en saber hacia dónde escapar. El rey lo controla todo, gobierna el mundo submarino, y tiene espías por todas partes. La única respuesta posible consiste en idear un plan para encarcelarlo. <br>Todos están asustados. Años atrás algunos ciudadanos intentaron rebelarse y aún están en prisión. <br>Sugieres organizar una fiesta en la que pondrán en escena una obra de teatro. A una señal acordada, los actores y todo el público se levantarán y apresarán al rey. Los actores tendrán armas de verdad, pero nadie sospechará nada, pues seguirán la trama de la obra. <br>Todos aceptan el plan y te piden que seas su jefe. <br><br>Si accedes a convertirte en jefe presioná 1. Si Si decides ayudarlos con los planes, pero huir de un mundo tan triste presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", serJefe)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", huir)
}

export function esperarAyuda() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Lo mejor será esperar a que el barco te localice con el equipo de sonar. Tú no puedes transmitir señales porque no funciona ningún elemento electrónico del submarino. No hay rastros del submarino misterioso. Te asomas por la portilla de gruesos cristales y ves que se dirige hacia tu nave una gigantesca ballena azul. Tienes la impresión de que chocaran. De pronto la ballena golpea tu nave con todas sus fuerzas. El submarino sufre graves daños. Empieza a entrar agua por la tapa de la escotilla. Tienes que abandonar la nave. Ahora la ballena se ha plantado junto al submarino para vigilar Y esperar. <br><br>Si decides tratar de escapar presioná 1. Si intentas montarte sobre la ballena presioná 2. Si no sabes qué hacer presioná 3.  </p>'

    divBtns = document.querySelector(".divBtns")
    divBtns.innerHTML += '<button class="btn btn3">3</button>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", salirPorTuCuenta)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", ballena) 
    btn3 = document.querySelector(".btn3")
    btn3.addEventListener("click", queHacer)
}

export function salirPorTuCuenta() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Resuelves que hay un camino de salida: abandonar el submarino y tratar de llegar a la superficie por tu cuenta. Una pequeña balsa salvavidas de color amarillo forma parte de tu equipo. La superficie de las aguas es serena, pero el barco no está a la vista. Durante dos días con sus noches vas a la deriva en la balsa salvavidas, bajo un sol ardiente y a la luz de las estrellas. Al tercer día te localiza un helicóptero de salvamento. Por fin estás a salvo. La exploración de la Atlántida tendrá que quedar a cargo de otro submarinista. La extraña fuerza que inmovilizó al submarino te ha dañado la vista. Tu carrera como aventurero submarino ha concluido. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function operacion() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Una enorme luz blanca te ilumina cuando estás tendido en la mesa de operaciones. Pierdes el conocimiento. Ocupan tu mente pensamientos, sonidos e imágenes placenteras. Al recuperar el sentido no sientes dolor ni percibes ningún cambio. Pero ahora puedes respirar bajo el agua y unirte a los atlantes en su mundo. Durante unas semanas exploras un mundo submarino jamás visto. Tus dos guías se han convertido en dos buenos amigos que te acompañan en tus aventuras por las profundidades, te llevan a explorar el lecho oceánico. Llevas una vida apasionante. Pero aunque te encanta, lamentas no poder volver al mundo terrestre. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function zoo() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">    - No, me niego tajantemente a una operación tan disparatada. ¡No quiero convertirme en un pez! <br>Los atlantes intentan convencerte de que la vida con ellos será dichosa, útil y prolongada. No obstante, te reusas. Te rocían con una neblina especial que te hace perder rápidamente el conocimiento. Varias horas después recuperas el sentido y te encuentras en un depósito submarino de aire en el que respiras con naturalidad. <br>Quizá cometiste un error enorme. Ya no quieren que te unas a su mundo ni que participes de su estilo de vida. Rechazaste su ofrecimiento y ahora estás preso en un zoológico. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}