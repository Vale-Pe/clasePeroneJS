import {iniciarLibro, salirDelSubmarino} from "./parte1Modules.js"
import {esforzarte} from "./parte6Modules.js"
import {salir, viajarET, viajarConEllos, quedarteEnAtlantida, volarPanel, esperar, otroFinal, pistolaLaser, continuarEsforzandote, volver4, explorarZona, otroFinal2, trabajarJuntos, aprovecharse, dejarseApresar, intentarEscapar} from "./parte8Modules.js"
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

export function seguirViaje() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Los electrones dan vueltas a velocidades vertiginosas y tú sigues adelante hasta llegar a un punto en el que tus instrumentos indican que el tiempo no existe. Tus sentidos están más aguzados que nunca. Oyes una música maravillosa y ves luces que también tocas y saboreas. Te inunda la paz y el bienestar. Percibes la presencia de otros seres próximos. Te vuelves y ves a tres atlantes. Entonces sientes que el submarino se ha convertido en un mero pensamiento, que la gente de la Atlántida ha entrado en tu mente y está a bordo de tu nave. Intentas penetrar sus pensamientos, pero te dicen que aún no has viajado lo bastante rápido como para ser un viajero del pensamiento. <br><br>Si decides salir de ese extraño mundo presioná 1. Si resuelves viajar en el pensamiento-espacio-tiempo presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", salir)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", viajarET)
}

export function volver3() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">No, no te sumergirás hacia el centro de la tierra. Sabes que bajo la delgada capa exterior, las regiones pasan de lo sólido a lo líquido y a continuación a un centro duro. No podrías sobrevivir a semejante viaje. Vuelves a la superficie para consultar con los científicos que están a bordo del barco. Los hombres de ciencia te dicen que sus instrumentos se han averiado, quizá por la proximidad de una tormenta, y también ellos se muestran precavidos. Deciden alejar el barco de las cercanías de ese misterioso hoyo. La expedición abandona y tienes la certeza de que has perdido la oportunidad de descubrir la Atlántida. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function aceptarInyeccion() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">La inyección es indolora y después que te la hayan aplicado no te sientes distinto. Te conducen a un confortable salón donde todos comparten un té especial para celebrar tu decisión. <br>    - Como ves, en el fondo todos los seres vivos son iguales. Nosotros hemos venido de un planeta diferente buscando a otros seres vivos. Pero tenemos que ser muy cuidadosos a la hora de aceptar gente nueva. Nosotros elegimos con gran prudencia. <br>Te sorprenden sus palabras. Te proponen que elijas: puedes viajar con ellos a través del tiempo y del espacio hasta su planeta, o permanecer en la Atlántida sumergida como trabajador con el objetivo de registrar información sobre la vida en la tierra. <br><br>Si decides viajar con ellos en el tiempo y el espacio presioná 1. Si resuelves quedarte a trabajar en la Atlántida presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", viajarConEllos)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", quedarteEnAtlantida)
}

export function rechazarInyeccion() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">La idea te parece espantosa. Tienes que organizar la huida. Cuando se distraen, te escabulles para precipitarte hacia la puerta de la nave espacial. No adviertes que un rayo láser protege la escotilla de salida. Lo pisas y quedas congelado al ir a dar el paso siguiente. Los atlantes te rodean apesadumbrados y te informan de que tendrás que permanecer así durante un tiempo equivalente a 23 años y 61 días terrestres, hasta que se disipen los efectos del láser. Entonces te concederán una segunda oportunidad. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function nuevaExpedicion() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">La única forma de demostrar que no estás loco consiste en organizar otra expedición a la Atlántida. Reúnes todo el dinero ganado y equipas una embarcación, contratas una tripulación, alquilas el submarino y te haces a la mar. La mayoría de la gente piensa que has perdido la cabeza. Pero les demostrarás que se equivocan. <br>Situado en el punto exacto que con tanto cuidado marcaste en las cartas marinas, te sumerges en el submarino. Vuelves a encontrar la cueva oculta y el panel de metal redondeado. <br>Aparentemente, el panel conduce a un pasadizo y está herméticamente cerrado. Intentas abrirlo con el brazo perforador del submarino, pero no cede ni un milímetro. Resulta decepcionante estar tan cerca del secreto y al mismo tiempo tan lejos. <br><br> ¿Volarás el panel con el rayo láser? presioná 1.  Si esperas pacientemente a que te vean y te inviten a entrar presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", volarPanel)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", esperar)
}

export function retirarse() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Durante varias semanas discutes contigo mismo sobre la posibilidad de organizar otra expedición. El dinero es lo de menos. Temes que el descubrimiento de la Atlántida signifique la ruina para sus habitantes. Consideras que su civilización debe ser protegida. Decides utilizar el dinero que has ganado para investigar el espacio y la vida en planetas de otras galaxias. Quizás algún día encuentres a los atlantes en el espacio. <br><br><center><strong>FIN?</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Otro final"
    btn1.addEventListener("click", otroFinal) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function volverABucear() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Insistes en que te sientes muy bien y te empeñas en sumergirte al día siguiente. Los científicos tratan de convencerte de que es un disparate volver a bajar. El capitán del barco te informa de que se aproxima una tempestad y que probablemente el día siguiente sea el único idóneo en mucho tiempo para bucear. Desoyendo todos los consejos, subes al submarino, te despides de tus amigos y desciendes a las profundidades. Estás cansado, pero muy entusiasmado. Cuando llegas al fondo del mar decides explorar el saliente del profundo cañón. <br><br>Presioná 1 o 2 para continuar. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", salirDelSubmarino)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", salirDelSubmarino)
}

export function trazarPlan() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Una violenta tempestad se aproxima al punto en el que se encuentran. El capitán decide trasladar el barco al abrigo de un puerto isleño cercano. Es demasiado arriesgado permanecer donde están. Los marineros de cubierta sujetan el submarino a la cubierta del buque y zarpan. <br>La tormenta estalla antes de su llegada al puerto isleño. El submarino se suelta y cae al agua. Los monitores del barco se han estropeado a causa de una terrible descarga eléctrica. Todos están vivos, pero no hay fondos para reponer el equipo averiado. La expedición a la Atlántida ha tocado a su fin. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function salirNadando() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Es en vano. El remolino te tiene en sus garras. Sientes que los brazos y las piernas se retuercen en todas direcciones. No hay solución. Giras, giras y giras. <br><br>Si usas la pistola láser para practicar un boquete en la pared del remolino presioná 1.  Si continúas esforzandote presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", pistolaLaser)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", continuarEsforzandote)
}

export function vortice() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Resuelves que no puedes salir del remolino nadando. Lo único que te queda por hacer es una inmersión profunda hacia el centro. <br>Pataleas varias veces y te arrojas al mismísimo centro del remolino. Ante tus ojos danzan luces y colores. Pierdes la noción de dónde estás. Ahora te encuentras parado en el lecho oceánico. Levantas la vista a través del centro del remolino y ves el cielo a más de 600 metros de distancia por encima de tu cabeza. <br><br>Si tratas de volver a la superficie presioná 1. Si te propones explorar la zona presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", volver4)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", explorarZona)
}

export function escaparDeNodores() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">La huida será difícil. Lo mejor será decirles que aceptas su oferta de espiar a los atlantes. Se ponen contentos cuando respondes que trabajarás para ellos. <br>    - Los atlantes están celosos de nosotros. Tenemos que estar siempre alerta para que no nos invadan y nos capturen. <br>No lo crees, pero no quieres discutir. Te llevan a las afueras, donde te despides para ir a reunirte con los atlantes. Cuando llegas, les pides que te permitan vivir con ellos. Sabes que jamás podrás abandonar su mundo subacuático, pero conservas la esperanza de poder escapar. Tal vez esa gente te facilitará una buena vida. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function aceptar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">    - De acuerdo, lo haré – dices -. Me sumaré a ustedes y espiaré a los atlantes. A lo mejor no son tan malos como creen. <br>Los nodores están encantados con tu ayuda. Te dan una habitación en un gran edificio, donde viven casi todos. El lugar es gris y lúgubre, más parecido a una cárcel que a cualquier otra cosa. Pasas esa noche en vela, mientras todos duermen, y comprendes que estás preso en una trampa que tú mismo tendiste. Ahora se te ocurre que los nodores provienen de otro planeta y son unos parias desgraciados. Los atlantes no quieren tener nada que ver con ellos. Tu decisión fue equivocada. <br><br><center><strong>FIN?</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Otro final"
    btn1.addEventListener("click", otroFinal2) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function quedarte() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Quizá los atlantes puedan enseñarte cómo alcanzar esta felicidad en la vida. Investigarás su historia. Cuando anuncias tu decisión te tratan con amabilidad. Miles de años atrás la Atlántida era una civilización avanzada. Los ciudadanos fomentaban sus sentimientos pacíficos y arrancaban de sí todo sentimiento de odio con el mismo cuidado con que se atiende un jardín. Sus mentes se convirtieron en un universo rico y deslumbrante, claro e ilimitado. Tienes tanto que hacer atendiendo las plantas marinas y estudiando historia, que en breve olvidas el submarino. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function escaparDeAtlantes() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">A la primera oportunidad corres hasta la salida del túnel y llegas a las aguas. No suena ninguna alarma. Nadie te persigue. Es extraño: te advirtieron que no te permitirían regresar al mundo terrestre. ¿Por qué te dejan escapar? <br>Nadas hacia la superficie, pero un instante después te desmayas. Nadie sobrevive a las altas presiones y a la falta de oxígeno. Pero ha ocurrido un milagro, porque de pronto te encuentras derribando unas algas pardas que te rodean. Estás a poca distancia de la superficie. <br><br>Presioná 1 o 2 para continuar. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", esforzarte)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", esforzarte)
}

export function aceptarPropuesta() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">¡Consejero de un rey! ¡Qué oportunidad! Quizás el rey ha gobernado durante tanto tiempo que ha perdido el contacto con el pueblo. Tal vez en tu condición de consejero puedas ayudar a la gente a obtener lo que desea. <br>Te nombran asesor especial del rey en asuntos de investigación de alimentos y vivienda. Inmediatamente organizas reuniones generales de todo el pueblo. El rey está contento de que sea otro el que se haga cargo de los problemas y lo deja todo en tus manos. Te concede unas tierras y te ofrece un generoso salario. La vida bajo el mar es rica y plena. El pueblo trabaja arduamente y lo hace muy bien. La decisión de quedarte fue acertada. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function negarse() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">¿Consejero de un rey mezquino? ¡Ni soñarlo! Le respondes que no quieres tener nada que ver con un tirano que no cree en su pueblo. El rey suelta una carcajada y te dice que si quieres puedes volver con ellos. Vuelves con tus nuevos amigos y hablan sobre la forma de derrocar al rey y a sus secuaces. Celebran reuniones secretas y esbozan un plan. Pero el día del golpe alguien descubre una filtración en el muro volcánico del mundo subacuático. Toda la civilización está en peligro. Olvidan toda idea de rebelión. Los atlantes deben impedir que el mar se derrumbe sobre ellos.  <br><br>Si decídes trabajar con ellos en este tiempo de desastre presioná 1. Si resuelves aprovechar la emergencia para escapar presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", trabajarJuntos)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", aprovecharse)
}

export function serJefe() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">No deseas encabezar una rebelión, pero esa gente te necesita. Organizas la representación; el rey está encantado de que su pueblo participe en un proyecto que le mantiene ocupado y feliz. Los súbditos no ven la hora de encarcelar al rey y poder tomar sus propias decisiones. <br>La noche de la representación, el teatro está absolutamente lleno. Todos esperan la aparición del rey, pero éste se demora. La multitud se pone nerviosa. Más tarde llega al teatro un mensajero y anuncia que el rey ha sufrido un grave ataque de encefalitis, del que quizá no salga con vida. <br>Te preguntas si el rey estará realmente enfermo o si habrá descubierto la conspiración. La gente está confundida y no sabe qué hacer. Te consultan y les aconsejas que sigan adelante con la obra. En ese momento entra en el teatro un pelotón de soldados del rey. Se encaminan directamente hacia ti. <br><br>Si te dejas apresar presioná 1. Si intentas escapar presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", dejarseApresar)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", intentarEscapar)
}

export function huir() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Estás dispuesto a ayudarlos en la planificación del derrocamiento del rey, pero no quieres participar activamente en la revuelta. En el fondo lo que realmente quieres es volver a tu propio mundo. Abrigas la esperanza de poder largarte cuando la rebelión esté en curso. El día de la rebelión no puedes permanecer impasible ante la valiente iniciativa de los atlantes: decides permanecer a su lado y ayudarles en todo lo que puedas. La esmerada planificación y el esfuerzo del entrenamiento dan buenos resultados. Un grupo de hombres y mujeres atentamente seleccionados captura al rey y a sus guardias con gran facilidad. La rebelión ha triunfado sin derramamiento de sangre, y el pueblo lo celebra durante días enteros. Los atlantes te tratan como si fueras uno de ellos y, por primera vez, sientes que realmente lo eres. <br><br><<center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function ballena() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Sabes de buzos que dan breves paseos sujetos a las aletas de las ballenas. Parece un disparate, pero tal vez ésta sea tu única vía de escape. Abandonas el submarino, nadas hasta la ballena y te coges de una de sus aletas. El gigantesco mamífero empieza a nadar en dirección a la superficie. Tienes algunas dificultades para mantenerte sujeto. Luego la ballena asoma a la superficie y allí permanece, llenándose los pulmones de aire. Tú te alejas tranquilamente nadando. Pasas dos o tres días a la deriva, dormitando y despertando sin dificultades. Conservas el calor gracias a tu traje aislante, mientras sus reservas de aire te mantienen a flote. Tienes hambre y sed, pero estás ileso cuando el helicóptero de salvamento te localiza balanceándote sobre las olas. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function queHacer() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Reconoces que no sabes qué hacer. El aspecto de la ballena es terrorífico y no se te ocurre ningún plan de fuga. Resuelves esperar, atento a todo lo que ocurra.Después de un tiempo que a ti te parece una eternidad, aunque probablemente sólo hayan transcurrido unos minutos, regresa el misterioso submarino, engancha un cable al submarino y te arrastra hasta la superficie. A continuación desaparece bajo las olas, dejándote a la espera del barco. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}
