import {iniciarLibro} from "./parte1Modules.js"
import {investigarBurbujas} from "./parte2Modules.js"
import {hoyo, volver, seguir, volver2, esforzarte, descansar, unirteANodores, quedarteConAtlantes, buscarGobernantes, ayudarAEscapar, esperarAyuda, salirPorTuCuenta, operacion, zoo} from "./parte6Modules.js"
import {mostrarFinal} from "./main.js"

const divFormulario = document.querySelector(".divFormulario")

let formulario = `
<form action="" class="formulario">
    <div class="divTexto">
    </div>
    <div class="divBtns">
        <button class="btn btn1">1</button>
        <button class="btn btn2">2</button>
    </div>
</form>`

let divTexto
let divBtns

let btn1
let btn2

export function barcoGriego() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Entras cautelosamente en el camarote del capitán. No hay huellas de la tripulación. Experimentas la extraña sensación de estar en la antigua Grecia. <br>Descubres una puerta que conduce a un camarote más pequeño. Entras y en una mesa próxima a la pared del fondo ves una caja dorada. La abres y en su interior encuentras los restos de un mapa. Por lo que ves, ese barco buscaba un hueco que conduce al centro de la tierra. Regresas al submarino, usas el mapa para localizar la inaudita grieta que te llevaría al centro de la tierra. Descubres la abertura del túnel, que según parece tiene aproximadamente unos 30 metros de diámetro. La lectura del sonar indica que el hueco no tiene fondo. <br><br>Si decides seguir descendiendo por el hoyo presioná 1. Si decides que es hora de volver a la superficie presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", hoyo)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", volver)
}

export function comunicarHallazgo() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">El viaje de vuelta a la superficie transcurre sin novedad y el submarino es izado a bordo del barco. Al salir de la nave los científicos y la tripulación te saludan. <br>El barco está preparado para la segunda inmersión, pero de pronto arrecia el viento y el mar se encrespa en furiosas olas que rompen en la cubierta del buque. Todos corren a prepararse para hacer frente a los vientos huracanados. No es posible iniciar la segunda inmersión. Todo el día y toda la noche el barco se balancea en el mar tempestuoso. <br>A la mañana siguiente el viento ha amainado y el cielo está completamente despejado. Te dispones a bucear. <br><br>Para continuar presioná 1 o 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", volverASumergirte)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", volverASumergirte)
}

export function volverASumergirte() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo"> Una vez más bajan el submarino por encima de la borda del barco. Tu submarino se hunde en el océano. Los peces que pasan cerca de tu cascarón metálico te observan precavidos. La luz del sol se desvanece a medida que desciendes. <br>Te diriges hacia el gran cañón que podría conducirte a la Atlántida. Al llegar a ese punto enciendes el reflector del submarino. Al instante divisas el hueco redondo que parece hecho por seres inteligentes. Tal vez sea el camino de entrada a la Atlántida. <br><br>Para continuar presioná 1 o 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", investigarBurbujas)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", investigarBurbujas)
}

export function renunciar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Envían un helicóptero para que te recoja y te lleve a una base aérea desde la que volverás en avión a los Estados Unidos. Los periódicos indican que se ha abandonado la búsqueda de la Atlántida. Sin embargo, meses después, un grupo de científicos se ponen en contacto contigo porque están convencidos de que es posible encontrar el continente perdido. Han organizado otra expedición y te piden que participes en ella. La tentación es irresistible. Lo que más te atrae es aventurarte en lo desconocido. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function explorar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Optas por conducir el submarino por el nuevo pasillo que lleva a la fuente de burbujas. De repente la nave es arrastrada hacia abajo, como si estuviera bajo la influencia de un poderoso imán. Pierdes el conocimiento. Al despertar te encuentras en una habitación cómoda y bien iluminada. A tu lado hay tres personas de pie; su aspecto es normal y parecen amistosas. Una de ellas te dice: <br>   - Estás en el mundo inferior de la Atlántida. Esta sala está especialmente destinada a recibir visitas. Si deseas entrar en la ciudad, síguenos, pero tal vez nunca puedas regresar a tu mundo. Si quieres marcharte ahora, te escoltaremos sano y salvo hasta la superficie. Eres tú el que debe decidir. No queremos hacerte daño. <br><br>Si los sigues hasta la ciudad de Atlántida presioná 1. Si vuelves presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", seguir)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", volver2)
}

export function salirASuperficie() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">De repente comprendes que el torrente de burbujas tiene potencia suficiente para elevar el submarino. Guías tu nave hasta el torrente burbujeante, donde inmediatamente sale disparada hacia la superficie. Mientras te trasladas en un giro ascendente, empiezas a notar cantidades crecientes de algas marinas. Cerca de la superficie la nave se enreda en las algas. Los instrumentos indican que los propulsores y los mecanismos de dirección no funcionaran. <br>Te pones el traje de buzo y sales a ver qué puedes hacer. Cuando estás fuera, en las algas, te das cuenta de que no podrás liberar al submarino. Nadas hacia la superficie, pero enseguida quedas completamente atascado entre las pegajosas algas. Estás atrapado; no puedes seguir adelante ni volver al submarino. <br><br>Si decides seguir esforzandote para llegar a la superficie presioná 1. Si eliges descansar y elaborar un plan presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", esforzarte)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", descansar)
}

export function serAtlante() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Te conducen a una sala con el suelo de mármol. Las paredes brillan. El techo es semejante al interior de un diamante de múltiples caras. <br>Una mujer que a primera vista inspira respeto te hace señales firmes aunque amables para que te acerques a ella. <br>    - Bienvenido a la Atlántida. Miles de años atrás supimos que estábamos a punto de hundirnos en el mar. Nuestro pueblo se preparó para la calamidad construyendo una nueva ciudad en el interior de un volcán extinguido. Desde entonces hemos vivido aquí en paz y armonía. <br>Te habla de un grupo de personas que se llaman nodores. Si lo deseas, puedes vivir con ellos, pero te repite que nunca podrás salir de la Atlántida. <br>Tu escolta será un hombre barbudo. La Atlántida es una ciudad hermosa. Los edificios se funden entre sí, los colores irradian luz y los patios desbordan de ramas de coral. <br>Te encantaría vivir allí, pero no te gusta nada ser prisionero. Es probable que tengas más posibilidades de escapar si te reúnes con los nodores. Preguntas por ellos a tu guía. <br>    -Creemos que son peligrosos, aunque en realidad no lo sabemos. Viven en el centro del viejo volcán. Si deseas ir allí, te acompañaré. <br><br>Si decides unirte a los nodores presioná 1. Si te quedas con los atlantes a la espera de una oportunidad de escapar presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", unirteANodores)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", quedarteConAtlantes)
}

export function correr() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Los atlantes han vivido en paz durante miles de años. Detestan la guerra. Tecnológicamente su civilización es muy adelantada. Un mecanismo sensible les advierte de que estás a punto de usar tu cañón láser. Al instante disparan un rayo especial contra el submarino y todos los mecanismos de la nave se paralizan. Ahora eres impotente. Se acercan tranquilamente al submarino y te piden que los acompañes a la Atlántida. <br>    - Ahora formas parte de la Atlántida. Comprendemos tus temores, pero no debes asustarte. Nadie te hará daño y tu vida aquí será plena. Síguenos. <br>Mientras te encaminas con ellos hacia un nuevo mundo, te preguntas si volverás a ver alguna vez el firmamento. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

export function pasadizoSecreto() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Escapas de la nave submarina sin ser visto por la gente. De acuerdo con las instrucciones, entras en un pasadizo. Al final de éste hay una esclusa de aire, y más allá una caverna increíblemente grande, llena de aire. Quizá sea el interior de un volcán extinguido. <br>El lugar es agradable, aunque te resulta extraño. Una suave sustancia cubre el suelo. Parece tener vida, aunque no puedes estar seguro. <br>Se te acerca un grupo de personas que te dedican gestos amistosos. <br>Hablan un idioma que no conoces, pero uno de ellos hace las veces de intérprete. Te enteras de que estás en la Atlántida; también te informan de que el continente está gobernado por un hombre avaro, egoísta y peligroso. Casi todos los demás son esclavos y desdichados, excepto los pocos que actúan como lugartenientes del gobernante. Tus nuevos amigos te piden socorro: tal vez puedas ayudarles a escapar. <br><br>Si decides buscar al gobernante presioná 1. Si decides ayudar a escapar a tus amigos presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", buscarGobernantes)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", ayudarAEscapar)
}

export function volverAlSubmarino() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Te introduces rápidamente en el submarino con la intención de huir del extraño submarino. <br>El ascenso a la superficie es rápido, pero cuando estás a unas pocas brazas de la superficie fallan todos los sistemas del submarino. Estás suspendido en el agua, sin posibilidades de hacer nada. Tienes la impresión de que una fuerza misteriosa te ha incapacitado. <br><br>Si decides esperar en el submarino hast recibir ayuda presioná 1. Si eliges escapar para llegar a la superficie por tu cuenta presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", esperarAyuda)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", salirPorTuCuenta)
}

export function seguirInvestigando() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Te recibe un grupo de personas semejantes a seres humanos, salvo por el hecho de que llevan en el cuello aberturas parecidas a agallas. Ves que entre los dedos de sus pies desnudos hay una membrana que forma una red. Te ordenan que te pongas el traje de buceo, te sacan rápidamente del submarino y te conducen hacia la ciudad. Durante el camino te muestran el zoo, donde ves animales de la fauna terrestre. Están rodeados por una especie de jaula de cristal llena de aire, lo que les permite vivir bajo el mar. <br>El jefe del grupo te explica que si lo deseas pueden someterte a una operación para que te inserten agallas con las que podrás respirar bajo el agua, o reunirte con los animales del zoo. <br><br>Si aceptas que te operen presioná 1. Si prefieres integrarte al zoo presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", operacion)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", zoo)
}

export function retroceder() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Otra vez a bordo del submarino, le indicas por radio al barco que saldrás a la superficie para trazar un plan. Mientras te elevas desde el gigantesco cañón, divisas en la parte superior del saliente algo que parece ser un camino. Los científicos del barco habían mencionado la posibilidad de que encontraras señales de la antigua civilización. Tienes que investigar. <br><br>Para continuar presioná 1 o 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", salirDelSubmarino)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", salirDelSubmarino)
}