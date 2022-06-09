import {iniciarLibro} from "./parte1Modules.js"
import {seguir} from "./parte6Modules.js"
import {quedarte2, meditar, conservarForma, convertirte, granjero, musico, seguirlos, noSeguirlos} from "./parte9Modules.js"
import {mostrarFinal} from "./main.js"

const divFormulario = document.querySelector(".divFormulario")

let formulario = `
<form action="" class="formulario">
    <div class="divTexto">
    </div>
    <div class="divBtns">
        <button class="btn btn1 fs-5">1</button>
        <button class="btn btn2 fs-5">2</button>
    </div>
</form>`

let divTexto
let divBtns

let btn1
let btn2

export function salir() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-5">Esto es demasiado para ti. Tienes la impresión de estar en una pesadilla y decides volver. Pero volver es mucho más difícil de lo que creías. Resulta muy difícil guiar al submarino en el laberinto de átomos. Ahora los instrumentos son inútiles. Desaparecen las figuras de los atlantes. Pierdes el conocimiento. Recuperas el sentido horas más tarde, flotando con tu traje de buzo por encima del hueco del fondo oceánico. El submarino ha desaparecido. Estás atontado: ¿habrá sido todo un sueño? Asciendes lentamente a la superficie, pero el barco también ha desaparecido. No puedes saber cuánto tiempo ha pasado. Comprendes que la tripulación debió de pensar que habías desaparecido para siempre y sabes que tienen razón. Las olas mecen tu cuerpo, que no ofrece resistencia, mientras flotas solo en el vasto mar. Lentamente tus fuerzas te abandonan. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function viajarET() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-5">¡Un viajero del pensamiento! Te das cuenta de que eso es lo que siempre hace la gente cuando sueña. Los atlantes te dicen serenamente que todo es igual: pasado, presente y futuro son lo mismo. Basta que te concentres y pongas tus pensamientos donde desees que estén. Lo intentas; sorprendentemente atraviesas el tiempo a gran velocidad hasta el día en que naciste, y luego hasta el día en que por primera vez hiciste submarinismo en alta mar. Tu mente vuela de un momento de tu vida a otro. Pero cuando decides pasar al futuro te encuentras ante un muro en blanco. Aparentemente no puedes viajar al futuro. <br>    - ¿Por qué no puedo adelantarme en el tiempo? - preguntas a los atlantes. <br>    - Ten paciencia - responden. - Cada cosa a su tiempo. <br>De repente giras a través del tiempo y sales a los confines exteriores del universo, donde sientes que la luz pasa a través de ti. No proyectas ninguna sombra. Te inunda una agradable sensación de paz. <br><br>Si decides quedarte presioná 1. Si decides esperar para tomar una decisión más meditada,  presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", quedarte2)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", meditar)
}

export function viajarConEllos() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-5">    - Iré con vosotros. Me interesa mucho ver otras partes del universo. <br>    - Felicitaciones. No te arrepentirás. Estamos listos para partir. <br>Te llevan a una sala pequeña y tres de ellos se detienen contigo bajo un rayo de intensa luz. Experimentas una sensación de velocidad, aunque no te mueves. Tienes la impresión de haber viajado cientos de miles de kilómetros en el espacio. Pasas junto al sol, atraviesas la vía láctea y otras galaxias. <br>Ahora te encuentras en el planeta Aygr, el lugar de origen de los atlantes. Ves un mundo de fantásticas figuras y plantas extrañas. La ciudad brilla como mil focos de luz. No distingues personas, sino formas de una luz muy brillante, que se mueven. De repente, algunas se convierten en atlantes. <br>    - Lo importante no son nuestros cuerpos, sino nuestra energía. Si lo deseas puedes vernos en nuestras formas corporales, que sólo utilizamos para comunicarnos con gente como tú. Puedes optar por permanecer como eres o aceptar la transformación. <br><br>Si decides conservar tu forma corporal presioná 1. Si resuelves convertirte en una forma energética presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", conservarForma)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", convertirte)
}

export function quedarteEnAtlantida() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-5">Has tenido ya suficientes aventuras. Viajar a otro planeta de una galaxia diferente parece más arriesgado de lo que estás dispuesto a reconocer. Además, puedes dejarlo para más adelante. Les dices que quieres quedarte para trabajar en su sociedad. Probablemente tus conocimientos del mar puedan serles útiles. Durante unos días discuten seriamente tu caso. Concluidas las conversaciones, te ofrecen un par de opciones para trabajar en la Atlántida. Puedes elegir entre ser granjero o músico. <br><br>Si decides ser granjero submarino presioná 1. Si resuelves hacerte músico presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", granjero)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", musico)
}

export function volarPanel() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-5">Tratarás de hacer saltar la escotilla de sus bisagras. Puedes hacerlo. Presionas el botón rojo que dispara el cañón láser. Al instante estalla un relámpago cegador. Pero la escotilla permanece en su sitio. Vuelves a disparar, disparas y disparas. Cada vez que lo haces el submarino se balancea por la fuerza del láser. Sigues disparando, sin apartar el dedo del botón. Entonces estalla un rayo similar en el interior del submarino. El cañón láser ha explotado. Tú y el submarino quedan destrozados en un instante. La escotilla sigue cerrada. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function esperar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-5">No está bien que utilices la fuerza, a no ser que te ataquen y debas defenderte. Te niegas a pensar siquiera en la posibilidad de utilizar el cañón láser, que podría matar a alguien y sin duda alguna destruiría cualquier posibilidad de entente amistosa. Decides esperar pacientemente, con la esperanza de que te vean y te inviten a entrar. Durante seis horas esperas tranquilamente a que aparezca alguna señal. Más allá aparece un destello verdoso que baña al submarino con una tenue luz. Se abre la escotilla. Salen tres figuras y te hacen señas de que les sigas. <br><br>Si decides seguirlos presioná 1. Si te niegas a seguirlos presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", seguirlos)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", noSeguirlos)   
}

export function otroFinal() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-5">Discutes contigo mismo semanas enteras. Resuelves volver a la Atlántida. Tienes tanta prisa por regresar que contratas una pequeña nave hidroplano muy veloz, para trasladarte al punto oceánico en el que se encuentra la Atlántida. ¡Tienes la intención de sumergirte en cuanto llegues sólo con tu equipo de buceo! Sabes que es imposible bucear a más de 600 metros de profundidad. Pero no te importa: sabes que debes intentarlo. Una tempestad azota el mar seis días seguidos y en cuanto se despeja te dispones a zambullirte. Precisamente cuando te introduces en el agua levantas la vista al cielo y en lo alto, más allá de las nubes, divisas la centelleante ciudad de la Atlántida. No era necesario sumergirse. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function pistolaLaser() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-5">Llevas una pistola láser para casos de emergencia. Abres un boquete en la pared del remolino y te zambulles. Nadas lentamente en dirección a la superficie. El barco no está a la vista. De pronto, una enorme ballena sale a la superficie y se queda muy cerca. Tardas media hora en nadar hasta el enorme mamífero, que no te presta la menor atención. Trepas por su cola y avanzas a gatas hasta lo más alto de su lomo. Desde tu posición ves el barco y el minúsculo destello de las lentes de los prismáticos reflejado en el sol. La tripulación del barco está vigilando a la ballena Agitas los brazos, con la certeza de que te han visto. Poco después irán a rescatarte. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function continuarEsforzandote() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-5">Te desmayas. Cuando recuperas el conocimiento estás flotando en la superficie del océano. Hay una fuerte marejada y el sol te da de lleno. Con toda probabilidad el remolino ceso tan rápida y misteriosamente como había empezado. Sientes un leve mareo y estás agotado. Cuando meneas la cabeza en el interior del casco sientes que un intenso dolor te recorre la sien derecha. El dolor se agudiza. Empiezas a perder el sentido. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function volver4() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-5">El remolino parece una sierra con inclinación ascendente hacia la superficie. El agua brota a tal velocidad que el centro parece estar en la más absoluta calma. Piensas que quizá podrías nadar a través de esa calma. Vale la pena intentarlo. Sin siquiera llegar a saber si avanzas, el remolino se invierte y en lugar de girar hacia abajo gira hacia arriba y te catapulta fuera de las aguas, al aire libre. Caes sobre la superficie del mar, en las proximidades del barco. Aunque estás aturdido por la caída, recuperas enseguida el sentido. Desde el barco te izan. Por supuesto, nadie te cree, pero entonces hasta tú mismo piensas que es algo demasiado fantástico para que pueda ser cierto. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function explorarZona() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-5">Sobre el fondo del mar hay una pequeña escotilla metálica. Tiras de ella con todas tus fuerzas, pero no se abre. Descansas un momento y miras a través de la muralla de agua que te rodea. ¡Dos peces te contemplan! Tienes la impresión de estar encerrado en un acuario para que ellos te observen. No oyes nada cuando se abre la escotilla. Una voz te ordena que entres. Asustado y con gran cautela, bajas un pasillo que conduce a una sala pequeña. Tres personas salen a tu encuentro. <br><br>Para continuar presioná 1 o 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", seguir)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", seguir) 
}

export function otroFinal2() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-5">Durante la noche te despiertan unas palabras dichas en voz baja. Prestas atención y te enteras de que un grupo de nodores tienen la intención de fugarse. Quieren unirse a los atlantes. Tienen la convicción de que en la Atlántida la vida será mejor para ellos. Te unes al grupo y no oyes más que relatos de miedo y oscuridad. Ellos quieren la luz y la amistad. Parece sencillo pero nada es fácil. <br>De improviso, la puerta se abre de par en par. Tres guardias con armas especiales se precipitan al interior de la estancia. Disparan sus armas y tú y tus compañeros se evaporan en un destello de brillante luz. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function trabajarJuntos() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-5">Años atrás los atlantes habían elaborado planes para casos de emergencia, pero la mayoría de la gente los ha olvidado. Un anciano recuerda dónde se guardaban las instrucciones y los equipos. Tú y todos los atlantes trabajan sin descanso durante 72 horas, achicando el agua de la inundación y construyendo un muro de contención alrededor de la grieta del volcán. Finalmente desconectan la última bomba aspirante. Están exhaustos, pero le han ganado la batalla al mar. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function aprovecharse() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-5">Como todos están preocupados por la filtración que permite la entrada del agua del mar, nadie notará que intentas fugarte. Corres por un largo pasillo muy poco transitado que conduce hasta el mar. La puerta de salida es pesada y está oxidada por la falta de uso. Empujas con todas tus fuerzas hasta que cede y te encuentras en una esclusa de aire que da al mar abierto. Accionas el botón de emergencia y sales disparado hacia las aguas. El submarino está donde lo dejaste y una vez en su interior te diriges a la superficie, donde te espera el barco. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function dejarseApresar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-5">Es inútil intentar escapar de los soldados. Estás rodeado. Te llevan ante el rey y éste te dice, apenado, que eres igual que los demás. No puede confiar en nadie. Tendrá que decidir qué hacer contigo; entretanto te arrojan al calabozo. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function intentarEscapar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-5">¿Cómo harás para huir? Los soldados van en tu busca. Gritas con toda la fuerza de tus pulmones y el público te rodea, formando una barrera entre tú y los soldados. Éstos observan ceñudos a los asistentes y después de un instante de vacilación, se retiran. Saben que tienen muy pocas probabilidades de salir vencedores en una lucha tan desigual. Todos gritan pidiendo que se lleve a cabo la rebelión. La muchedumbre abandona el teatro y se dirige a la residencia real. A lo largo del camino mucha gente se suma a la multitud, incluso soldados. Son libres. El rey es encarcelado. La rebelión ha sido un éxito. <br><br><center><strong>FIN</strong></center></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}