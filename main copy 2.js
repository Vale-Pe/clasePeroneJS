
//MODO CLARO/MODO OSCURO --> Modulos y localStorage

import {darkMode, lightMode} from "./themesModules.js"

let boton = document.querySelector("#boton");

boton.addEventListener("click", function(){
    if (localStorage.getItem("theme") == "dark") {
        lightMode()
    }else{
        darkMode()
    }
})

document.addEventListener("DOMContentLoaded", function(){
    if (localStorage.getItem("theme") == "dark") {
        darkMode()
    }else{
        lightMode()
    }
}) 

//Speech Synthesis ---------------------------------------------

let btnVoz = document.querySelector(".btnVoz")
btnVoz.addEventListener("click", hablar)

function hablar(evt){
    evt.preventDefault()

    let voz = new SpeechSynthesisUtterance();
    voz.text = document .querySelector(".divFormulario").textContent
    voz.lang = "es-AR"
    speechSynthesis.speak(voz)
}

//Variables 

const divFormulario = document.querySelector(".divFormulario")

let btnInicio
let edad;
let nombre;

const despedida = [`¡Que tengas un buen día!`, `¡Que tengas buenas tardes!`, `¡Que tengas buenas noches!`]

const [despedida1, despedida2, despedida3] = despedida //--> Destructuring

console.log (...despedida) //--> Spread de array

const final1 = new Date()
const hora1 = final1.getHours()

//Comienzo-------------------------------------------------------------

mostrarInicio() 

function mostrarInicio () {
    divFormulario.innerHTML = '<button type="button" class="btnInicio" value="inicio"></button>'

    btnInicio = document.querySelector(".btnInicio")
    btnInicio.textContent = "INICIO"
    btnInicio.addEventListener("click", inicio)
}

function inicio() {
    // --> Libreria SweetAlert2
    Swal.fire ({
        title: "¿Estás listo para jugar?",
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: 'sweetAlert2',
    }).then((result) =>{
        if (result.isConfirmed) {
            validarJugador();
        } else {
            const tituloDespedida = document.createElement("h2")
            divFormulario.appendChild(tituloDespedida)
            divFormulario.removeChild(btnInicio)

            hora1>6 && hora1<=12 ? tituloDespedida.textContent = despedida1 : 
            hora1 >12 && hora1 <=19 ? tituloDespedida.textContent = despedida2 : tituloDespedida.textContent = despedida3
            //Operador ternario
        }
    })
}

//Datos--------------------------------------------------------------------------

function validarJugador() {
    divFormulario.innerHTML = '<form action="" class="formulario"></form>'

    let formulario1 = document.querySelector(".formulario")

    const divDatos = document.createElement("div")
    divDatos.classList.add("datos")

    const divEdad = document.createElement("div")

    const divNombre = document.createElement("div")

    const btnDatos = document.createElement("input")
    btnDatos.classList.add("btnDatos")
    btnDatos.setAttribute("type", "submit")
    btnDatos.setAttribute("value", "Enviar")

    divDatos.appendChild(divEdad)
    divDatos.appendChild(divNombre)
    divDatos.appendChild(btnDatos)
    formulario1.appendChild(divDatos)

    divEdad.innerHTML = '<p class="parrafo">¿Cuál es tu edad?</p><label for="inputEdad"><input type="number" id="inputEdad" class="input" placeholder="Edad: "></label>'

    divNombre.innerHTML = '<p class="parrafo">Introduce tu nombre, por favor.</p><label for="inputNombre"><input type="text" id="inputNombre" class="input" placeholder="Nombre: "></label>'

    formulario1.addEventListener("submit", validarDatos)
}

function validarDatos(evt) {
    evt.preventDefault()

    edad = document.getElementById("inputEdad").value;
    nombre = document.getElementById("inputNombre").value;
    

    if ((edad >=13) && !(nombre.length ===0)) { //--> baje edad. No tenia sentido que sea para > de 18
        
        Swal.fire ({
            icon: 'success',
            title: "¡Bienvenido al juego!",
            showConfirmButton: true,
            showCloseButton: true,
            confirmButtonText: 'Aceptar',
            customClass: 'sweetAlert2',
        }) 

        divFormulario.innerHTML = '<button type="button" class="btnComienzo" value="comenzar">Comenzar juego</button>'
        
        const btnComienzo = document.querySelector(".btnComienzo")

        btnComienzo.addEventListener("click", comenzarJuego)  
    } else if (((edad <13) || (edad ===null) || (edad ===' ')) && !(nombre.length ===0)){
        Swal.fire ({
            icon: 'error',
            title: "No podes jugar: lenguaje complejo, contenido violento para menores de 13 años. ",
            showConfirmButton: true,
            showCloseButton: true,
            confirmButtonText: 'Aceptar',
            customClass: 'sweetAlert2',
        })
        const despedida1 = [`¡Que tengas un buen día!`, `¡Que tengas buenas tardes!`, `¡Que tengas buenas noches!`]
        const final1 = new Date()
        const hora1 = final1.getHours()

        if(hora1 <=12){
            divFormulario.innerHTML = `<h2>${despedida1[0]}</h2>`
        } else if ((hora1 >12) && (hora1 <=19)) {
            divFormulario.innerHTML = `<h2>${despedida1[1]}</h2>`
        } else {
            divFormulario.innerHTML = `<h2>${despedida1[2]}</h2>`
        }
    } else if ((edad >=18) && (nombre.length ===0)) {
        Swal.fire ({
        icon: 'error',
        title: "Debe ingresar un nombre",
        showConfirmButton: true,
        showCloseButton: true,
        confirmButtonText: 'Aceptar',
        customClass: 'sweetAlert2',
        })
    } else {
        Swal.fire ({
        icon: 'error',
        title: "Debe completar los datos",
        showConfirmButton: true,
        showCloseButton: true,
        confirmButtonText: 'Aceptar',
        customClass: 'sweetAlert2',
    })
    }
}

function comenzarJuego(evt){
    evt.preventDefault()

    divFormulario.innerHTML = '<form action="" class="formulario"></form>'

    let formulario2 = document.querySelector(".formulario")

    const eleccionLibro = document.createElement("div")
    eleccionLibro.classList.add("eleccionLibro")

    function mostrarLibros () {
            fetch("json/libros.json") //--> Fetch
            .then ((respuesta) => {
                return respuesta.json()
            })
            .then ((dato) =>{
                dato.forEach(libro => {
                    eleccionLibro.innerHTML += `
                    <div class="divLibros">
                        <img class="imgLibros" src="${libro.img}">
                        <h4 class="parrafo"><p>${libro.titulo}</p></h4>
                        <input class="inputLibros" type="radio" name="libros" id="Libro${libro.id}">
                    </div>
                `
                })
            })
            .catch ((err)=>{
                console.log("El error es: " + err)
            })
        }

    mostrarLibros()

    const btnLibros = document.createElement("input");
    btnLibros.classList.add("btnLibros");
    btnLibros.setAttribute("type", "button");
    btnLibros.setAttribute("value", "Seleccionar libro");
    
    formulario2.appendChild(eleccionLibro)
    formulario2.appendChild(btnLibros)

    btnLibros.addEventListener("click", elegirLibro)
}

function elegirLibro(evt) {
    evt.preventDefault();

    if (document.getElementById("Libro0").checked) {
            iniciarLibro()
    } else {
        Swal.fire ({
            icon: 'error',
            title: "El libro seleccionado no está disponible por el momento, seleccione otra opción",
            showConfirmButton: true,
            showCloseButton: true,
            confirmButtonText: 'Aceptar',
            customClass: 'sweetAlert2',
        })
    }
}

//Inicio del libro -----------------------------------------------------
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

function iniciarLibro() {

    divFormulario.innerHTML = '<img class="imgFondo" src="Img/barco.jpg" alt="">'
    divFormulario.innerHTML += formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Eres explorador submarino. En este momento zarpas con el propósito de explorar las aguas más profundas. Tienes que encontrar la ciudad perdida de Atlántida: la misión más apasionante que te han encomendado. Subís con tu equipo y tu traje especial a tu nave submarina. Comienza el descenso a las profundidades del oceano, con la ayuda de un cable delgado aunque resistente. La nave llega a una saliente cercana al lecho del océano. Si decides, puedes salir a explorar el saliente. Sino, puedes soltar el cable y explorar el lecho con el submarino. <br><br>Si decides explorar el saliente presioná 1. Si decides explorar con el submarino presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", salirDelSubmarino)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", soltarCable)
}

// PARTE 1

function salirDelSubmarino () {
    divFormulario.innerHTML = '<img class="imgFondo" src="Img/calamar.jpg" alt="">'
    divFormulario.innerHTML += formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Tu traje de inmersión te protegerá de las intensas presiones de las profundidades. Sales del submarino maravillado por el mundo extraño que encuentras. Comienzas a explorar con ayuda de tu reflector de mano. De pronto pasa a tu lado un cardumen a gran velocidad. Giras para ver de que se trata y descubres que la nave está en poder de un enorme monstruo submarino. Sabes que tu traje no te protejerá contra semejante monstruo. <br><br>Si decides esconderte ingresá 1. Si decides escapar ingresá 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", esconderte)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", escapar)
}

function soltarCable () {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Indicas por radio la situación. Avisas que soltarás el cable. Dan su aprovación. Enciendes el reflector de la nave. A la izquierda visualizas una cueva. A la derecha observas como ascienen constantemente burbujas desde el fondo del cañón. <br><br>Para investigar la cueva presioná 1. Para investigar las burbujas presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", investigarCueva)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", investigarBurbujas)
}

// PARTE 2

function esconderte() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">El gigantesco calamar se revuelve y vuelca el submarino, pero al fin, se cansa del juego y se aleja. Ahora eres libre de abandonar el escondite y revisar la nave para averiguar si está averiada. Descubres que la entrada está rota. No puedes entrar. No obstante, la tripulación del barco sospechó que estabas en dificultades cuando no respondiste a un control rutinario por radio. Ahora están bajando una plataforma de salvamento. En cuanto estás en la plataforma les avisas para que empiecen a izarla lentamente hacia la superficie. Tendrán que subirte con gran lentitud, a fin de que no contraigas la enfermedad de la descompresión (la rápida expansión de burbujas de nitrógeno en la sangre). En el preciso instante en que la plataforma comienza a moverse, el calamar gigante reaparece de imprevisto, como salido de la nada. Va directamente hacia ti. <br><br>Para luchar contra el calamar elegí 1. Si elegis indicar que te suban a toda velocidad, aún sabiendo que contraerás la enfermedad de la descompresión ingresá 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", lucharContraCalamar)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", subirRapido)
}

function escapar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Con movimientos prudentes abandonas el submarino en las garras del gigantesco calamar. Planeas pedir ayuda dejando flotar un rotulador que llegará a la superficie y dejará en el agua un brillante manchón amarillo. Los hombres de la tripulación tienen instrucciones de estar atentos a esas señales de emergencia. En cuanto las descubran te enviarán ayuda. Cuando llegas al saliente del cañón te sientes un poco más seguro, pero en ese momento ves al más temible de los seres marinos: un tiburón. Tienes la certeza de que eres su blanco. Quizá deberías accionar la carga protectora de emergencia que te enviaría inmediatamente a la superficie. Pero el tiburón es rápido y tal vez podría agarrarte. Sabes también que en razón del rápido ascenso contraerías la enfermedad de la descompresión. <br><br>Si decides disparar la carga especial,para llegar a la superficie ingresá 1. Si resuelves permanecer inmóvil con la esperanza de que el tiburón se aleje ingresá 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", dispararCarga)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", permanecerInmovil)
}

function investigarCueva () {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Con mucho cuidado conduces el submarino entre las paredes del cañón. Descubres en el fondo un gran hoyo del que emanan las burbujas. El submarino cuenta con un equipo científico para analizarlas. Tiene también un sonar que puede medir las profundidades de cualquier cavidad. <br><br>Para analizar las burbujas ingresá 1. Para hacer mediciones con el sonar ingresá 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", analizarburbujas)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", medirConSonar)
}

function investigarBurbujas() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Piloteas el submarino a través de la entrada de la cueva. Una vez en el interior, el reflector ilumina unas estructuras parecidas a muelles y embarcaderos junto a los muros de la cueva. El reflector no es muy potente, pero llevas un láser especial con el que podrías iluminar la cueva y hacerla tan luminosa como si fuera de día. Lamentablemente la luz del láser sólo puede usarse dos veces y durante períodos muy breves, pues debe recargarse a bordo del barco, que ahora se encuentra en la superficie a más de 600 metros por encima de tu cabeza. <br><br>Para usar la luz del láser ingresá 1. Para adentrarte en la cueva ingresá 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", usarLuzLaser)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", adentrarteEnCueva)
}

// PARTE 3 

function lucharContraCalamar () {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">El calamar te ataca. Dos tentáculos de seis metros de longitud se despegan, con sus palpitantes ventosas de succión, intentando atraparte. Abandonas la plataforma y disparas rápidamente dos arponazos, que alcanzan al calamar cerca de su monstruoso par de ojos. Pero la bestia no deja de acercarse. <br>Rodea tu escafandra con algunos de sus tentáculos y rompe el cierre hermético de tu traje. Disparas la última lanza del arpón con la esperanza de acertarle en un punto vulnerable. Un hilillo de agua empieza a filtrarse por tu traje. Haces señales al barco para que te icen rápidamente: «ascenso de emergencia». Tienes que haberle acertado al calamar, pues se aleja flotando sin dejar de retorcerse y agitarse. Sospechas que estás a punto de perder el conocimiento. <br>Despiertas en la cubierta del barco, te ingresan rápidamente en la cámara de descompresión para anular el efecto de la enfermedad. Unos días después te sientes mejor y empieza a preocuparte nuevamente la idea de volver a sumergirte en los abismos marinos. <br><br> Para abandonar la expedición presioná 1. Para volver a bucear presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", abandonar)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", bucear)
}

function subirRapido() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Empiezan a izarte rápidamente y comienzas a sentirte mareado, notas que se te debilitan los brazos y las piernas. Te sueltas de la plataforma y, agotado, te dejas arrastrar por el mar. Ves que un delfín se encamina hacia ti. Has oído decir que esos mamíferos a veces ayudan a la gente que se encuentra en dificultades. ¿Te ayudará éste a ti?. <br><br>Si intentas que el delfín te ayude presioná 1. Para seguir nadando presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", delfin)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", nadar)
}

function dispararCarga() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Accionas la carga de propulsión especial y sales disparado aguas arriba, aterrando a todos los cardúmenes que se cruzan en tu camino. Te mareas y pierdes la noción de dónde estás. Tienes la impresión de que el mundo está al revés. Esperas que el tiburón no esté cerca. Sales a la superficie y flotas a unos 800 metros del barco. <br>Los vigías detectan tu presencia y van rápidamente a rescatarte. Lamentablemente el rápido ascenso te ha hecho enfermar de gravedad. Producir la descompresión lleva mucho tiempo. Una vez curado, el médico te informa de que no podrás volver a hacer submarinismo. Tendrá que ser otro el que encuentre la Atlántida. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function permanecerInmovil() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Esperas, inmóvil, a que el tiburón se aleje. Pero un rato después descubres que otros tiburones se acercan para participar de la cacería. Te rodean, cada vez más próximos, cada vez más rápidos. Es demasiado tarde. ¡No hay salida! <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function analizarburbujas() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Te pones el traje de buzo y, una vez fuera del submarino, utilizas tu equipo especial para analizar las burbujas. En plena tarea, golpeas torpemente la válvula que expulsa el aire comprimido necesario para que el submarino ascienda a la superficie. Como no puedes hacer nada para solucionarlo, sigues analizando las burbujas. Compruebas que contienen un alto porcentaje de oxígeno y ningún gas tóxico. Tal vez provengan de alguna zona profunda en la que pueden vivir y respirar seres humanoides. ¡Quizá provienen de la Atlántida! <br>Te preguntas si no sería conveniente utilizar el brazo perforador del submarino para agrandar la fuente productora de burbujas, y de este modo poder explorarla con la nave. Sin embargo, te preocupa el hecho de que el submarino esté perdiendo su capacidad de elevarse. Se te ocurre que también podrías intentar acumular las burbujas y usarlas para izar el Submarino. <br><br>Si prefieres recoger las burbujas y llenar el depósito del submarino presioná 1. Para perforar presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", recogerBurbujas)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", perforar)
}

function medirConSonar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Maniobras el submarino hasta el hoyo y haces mediciones con el sonar para averiguar su profundidad. Para tu sorpresa, el sonar indica que el hoyo es extraordinariamente profundo: ¡podría llegar al centro de la tierra! ¿Qué habrá allí abajo? ¿De dónde vienen las burbujas? ¿Estará la Atlántida bajo tus pies? <br>Observas en los instrumentos algo inquietante: se ha producido un terremoto de intensidad leve. El submarino no se ha estropeado, pero el terremoto podría provocar una ola sísmica en la superficie, obligando al barco a buscar una zona más segura. <br>Quizá sea peligroso que no vuelvas a la superficie y te vayas con el barco. Por otro lado, es posible que estés en la antesala de uno de los descubrimientos más grandes del mundo. <br><br>Si decides descender presioná 1. Para volver a la superficie presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", descender)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", volverASuperficie)
}

function usarLuzLaser() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">El rayo láser ilumina toda la gruta. ¡A lo lejos, al fondo de la cueva, hay un submarino! Con mucho cuidado maniobras para acercarte. Lo identificas como el submarino que desapareció misteriosamente en el triángulo de las Bermudas hace casi un año. Este triángulo se encuentra a más de 3.200 kilómetros de distancia. <br>Aparentemente el submarino no está averiado, pero se encuentra cubierto de algas viscosas. Bellos peces nadan a su alrededor, como si se tratara de un premio especial. ¡Entonces descubres que la escotilla principal no está cubierta de algas! <br><br>Si decides entrar en el submarino presioná 1. Para seguir recorriendo la cueva presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", entrarEnSubmarino)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", seguirRecorriendo)
}

function adentrarteEnCueva () {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Entras silenciosamente en la cueva. El techo parece ascendente y sigues su inclinación. La sonda ecoica indica que asciendes a bastante velocidad. Quizá llegues a la superficie, al aire libre. Pero el techo de la gruta deja de estar inclinado hacia arriba. Ante tus ojos aparece una escotilla metálica perfectamente redondeada, hecha con un metal que nunca habías visto. Intentas abrirla con el brazo mecánico del submarino. La escotilla no cede. Envías señales de radio a la puerta, con la esperanza de ponerte en contacto con el otro lado. <br><br>Si decides hacer volar la escotilla con una carga explosiva presioná 1. Para seguir enviando señales por radio presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", volarEscotilla)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", enviarSeñales)
}

// PARTE 4

function abandonar () {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Con gran pesar, resuelves que lo más sensato es abandonar la expedición. No puedes arriesgarte a volver ahora a las profundidades. Aunque a regañadientes, regresas a Estados Unidos. <br>Te invitan a hablar de tus aventuras en vanos programas de televisión. Durante el transcurso de uno de ellos interrumpen tu relato para dar al mundo una noticia de última hora: el descubrimiento de la Atlántida. Lamentas haber tomado la decisión de abandonar cuando lo hiciste, pero en realidad no tenías otra opción, ¿verdad? <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function bucear () {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Eres incapaz de resistirte a la aventura submarina. Tienes que volver a bajar; después de unas semanas de descanso, te introduces en el submarino y te hundes rápidamente. Después de ponerte el traje especial, te decides a sondear las profundidades.  No hay rastros del calamar gigante y te sientes seguro. <br>Rodeas una formación rocosa y das con los restos del naufragio de un antiguo barco griego. Te resulta extraño descubrir un barco intacto a tanta distancia de la superficie. ¿Qué lo llevó hasta allí? ¿Estaría visitando la Atlántida antes de que el continente se hundiera? <br>Tornas fotografías y escribes unas notas en tu libreta submarina. Tal vez ese antiguo barco guarda el secreto de la Atlántida. <br><br>Si entras en el barco griego presioná 1. Si decides volver y comunicar tu hallazgo presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", barcoGriego)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", comunicarHallazgo) 
}

function delfin() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">El delfín te observa, e incluso crees que te sonríe. Te aferras a una de sus aletas y el delfín, con un enérgico movimiento de todo su cuerpo, nada en sentido ascendente. Poco después sales a la superficie. Parpadeas a causa del brillo del sol. El barco no está a la vista. Estás perdido mar adentro. <br>El delfín se zambulle, llevándote a rastras. Acelera, y 20 minutos después te encuentras junto al barco. Seguramente el delfín oyó los motores del buque científico. <br>En cuanto estás a bordo todos te felicitan. Volverás a sumergirte, pero te persigue una idea: ¿qué ocurrirá si te abandona la buena suerte? <br><br>Si decides volver a sumergirte al dia siguiente presioná 1. Para renunciar presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", volverASumergirte)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", renunciar)
}

function nadar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">El delfín podría ayudarte, pero también podría no hacerlo. Decides correr el riesgo de arreglarte por tu cuenta. Nadas en dirección a la superficie. El delfín te sigue un rato y luego se aleja. Te tomas un descanso a unos 9 metros por debajo de la superficie, antes de iniciar el ascenso final. <br>En ese momento ves que se acerca un pez enorme, feísimo, lleno de protuberancias, hinchado y cubierto de marcas negras y blancas. Fija en ti sus ojos saltones. Es un gran mero, un pez que no se molesta en morder a sus víctimas, pues se las traga enteras de un solo bocado. Evidentemente serás su próxima comida. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function recogerBurbujas() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Logras recoger los gases burbujeantes y llenar los depósitos del submarino en cantidad suficiente como para que la nave pueda elevarse. ¡En el preciso instante en que llegas al saliente de lo alto del cañón, divisas algo semejante a un viejo camino! Las rocas que lo bordean parecen ser contracarriles. ¿Será un sendero que conduce a la ciudad perdida de la Atlántida? Anclas el submarino y te dispones a investigar de cerca. <br><br>Presioná 1 o 2 para continuar. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", salirDelSubmarino)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", salirDelSubmarino)
}

function perforar () {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">El torrente de burbujas aumenta cuando empiezas a perforar. Ahora es lo bastante fuerte para llegar a la superficie de las aguas. Podrías intentar salir a la superficie para localizar la posición exacta del área burbujeante. Después harías planes con los científicos del barco para decidir el paso siguiente. Claro que también podrías explorar ahora mismo el hueco, con ayuda del submarino, para averiguar cuál es el origen de las burbujas. Sabes que es un riesgo entrar en la cavidad, pero podría conducirte a la fuente de las burbujas y quizás a la Atlántida. <br><br>Para explorar presioná 1. Para salir a la superficie presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", explorar)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", salirASuperficie)
}

function descender() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Es el momento de tomar una decisión. Verificas todos los controles del submarino, aprietas los dientes y accionas la palanca de control hasta la posición de inmersión profunda. Desciendes hasta donde ninguna persona se ha aventurado nunca. El submarino es apropiado para bajar a grandes profundidades, pero ahora lo hace a toda velocidad. <br>La presión es intensa, la oscuridad total y el calibrador de profundidad marca una cifra increíble: 25 kilómetros. Inviertes de inmediato la palanca de control. En el panel parpadean las luces de advertencia: indican que ahora las fuerzas de gravitación son más potentes que los motores de propulsión del submarino. Has cruzado el punto de no retorno y tu viaje descendente continuará en la más profunda oscuridad hasta que la presión del agua sea excesiva para el submarino. Este es tu último viaje. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function volverASuperficie() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Con mucho cuidado haces retroceder al submarino hasta el cañón. Sin previo aviso, el submarino se ve atrapado por una fuerte corriente que lo arrastra hacia una cueva. Una vez en el interior, la corriente lo empuja hacia una gran puerta metálica. El submarino es arrastrado al interior. La puerta se cierra, la cueva se desagua y sales del submarino para pasar a una cámara que es obra de manos humanas. Se abre una puerta en la pared y aparecen dos personas vestidas con sencillez que se acercan hacia ti. Una de ellas te dice: <br>- Bienvenido a la Atlántida. Te esperábamos. ¡Qué descubrimiento! Has encontrado el continente perdido y su antigua civilización. Aquellas dos personas te informan de que no se permite la salida de nadie que haya dado con su continente. Los atlantes no son crueles, pero temen que se descubra su mundo. <br>Te piden que los sigas y aceptas, aunque tu idea es otra. Existe la posibilidad de que intentes salir de la cámara mediante una descarga del cañón laser del submarino. <br><br>Si decides seguirlos y unirte a la sociedad atlante presioná 1. Para correr hacia el submarino y hacer volar la puerta con el cañon láser presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", serAtlante)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", correr)
}

function entrarEnSubmarino() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">El submarino es realmente misterioso. Te has puesto el traje de buzo. Abres la escotilla de la torreta y entras. Todo está sorprendentemente limpio y ordenado. <br>Una voz salida de la nada empieza a contarte que miles de años atrás los dirigentes de la Atlántida se dieron cuenta de que su continente se estaba hundiendo en el mar. Descubrieron una enorme caverna subterránea y construyeron nuevos tipos de alojamiento para sus habitantes. Más adelante, cuando la Atlántida estaba profundamente hundida bajo el mar, sus científicos descubrieron y perfeccionaron una operación que les permitió respirar bajo el agua.  <br>La voz, que suena amistosa, te informa de que en la Atlántida hay dos grupos: uno bueno y otro malo. La voz te invita a pasar al mundo de la Atlántida y te da instrucciones para llegar a un pasadizo secreto que comunica con la ciudad sumergida. <br>Mientras sigues las indicaciones divisas a hurtadillas una increíble nave submarina con varias personas en su interior. Tiene que ser una nave atlante, pero no puedes saber si esa gente pertenece al grupo de los buenos o de los malos. ¿Conocen la existencia del pasadizo secreto? <br><br>Si decides entrar en el pasadizo secreto presioná 1. Para volver al submarino presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", pasadizoSecreto)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", volverAlSubmarino)
}

function seguirRecorriendo() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Recorres la cueva, pasas junto a los restos del submarino y detectas los restos de otro naufragio. Más allá hay otro. Todos están cubiertos de algas, pero no parecen estropeados. Quizá los atlantes atrapan barcos en el triángulo de las Bermudas y los llevan a ese lugar. Te domina la curiosidad. Te pones el traje de buzo. Abandonas el submarino y avanzas para inspeccionar. De pronto aparece por detrás de ti una serpiente marina mortalmente venenosa, de 4 metros de largo, y te muerde en la mano. No existe ningún antídoto para su veneno letal. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function volarEscotilla() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">La única forma de llegar al otro lado de la puerta es volarla, o al menos eso supones. El cañón láser del submarino es muy potente y lo pones en posición de disparar. Pulsas el mando y disparas un potente rayo en dirección a la escotilla. Nada ocurre. Sitúas el mando del cañón en fuerza de emergencia. Vuelves a pulsar el botón y el rayo destruye al instante la escotilla. Un aluvión de agua de mar penetra por el gigantesco agujero y te arrastra hasta una caverna llena de aire. El agua inunda la caverna en un instante y con fuerza explosiva. Observas que varias personas corren hacia unas escotillas de salida. ¡Es demasiado tarde! Cometiste un error. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function enviarSeñales() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Tus transmisiones no producen ningún resultado y te cansas de enviar señales a través de la puerta herméticamente cerrada. Estás a punto de renunciar cuando la puerta se abre de par en par, dejando a la vista una caverna con otra puerta. Entras con mucha cautela y una vez en el interior recibes una señal por radio. El mensaje dice que eres bienvenido, pero que si entras jamás podrás retomar a la faz de la tierra. Tienes que tomar una decisión. <br><br>Para seguir investigando presioná 1. Para retroceder presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", seguirInvestigando)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", retroceder)
}

// PARTE 5

function barcoGriego() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Entras cautelosamente en el camarote del capitán. No hay huellas de la tripulación. Experimentas la extraña sensación de estar en la antigua Grecia. <br>Descubres una puerta que conduce a un camarote más pequeño. Entras y en una mesa próxima a la pared del fondo ves una caja dorada. La abres y en su interior encuentras los restos de un mapa. Por lo que ves, ese barco buscaba un hueco que conduce al centro de la tierra. Regresas al submarino, usas el mapa para localizar la inaudita grieta que te llevaría al centro de la tierra. Descubres la abertura del túnel, que según parece tiene aproximadamente unos 30 metros de diámetro. La lectura del sonar indica que el hueco no tiene fondo. <br><br>Si decides seguir descendiendo por el hoyo presioná 1. Si decides que es hora de volver a la superficie presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", hoyo)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", volver)
}

function comunicarHallazgo() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">El viaje de vuelta a la superficie transcurre sin novedad y el submarino es izado a bordo del barco. Al salir de la nave los científicos y la tripulación te saludan. <br>El barco está preparado para la segunda inmersión, pero de pronto arrecia el viento y el mar se encrespa en furiosas olas que rompen en la cubierta del buque. Todos corren a prepararse para hacer frente a los vientos huracanados. No es posible iniciar la segunda inmersión. Todo el día y toda la noche el barco se balancea en el mar tempestuoso. <br>A la mañana siguiente el viento ha amainado y el cielo está completamente despejado. Te dispones a bucear. <br><br>Para continuar presioná 1 o 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", volverASumergirte)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", volverASumergirte)
}

function volverASumergirte() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo"> Una vez más bajan el submarino por encima de la borda del barco. Tu submarino se hunde en el océano. Los peces que pasan cerca de tu cascarón metálico te observan precavidos. La luz del sol se desvanece a medida que desciendes. <br>Te diriges hacia el gran cañón que podría conducirte a la Atlántida. Al llegar a ese punto enciendes el reflector del submarino. Al instante divisas el hueco redondo que parece hecho por seres inteligentes. Tal vez sea el camino de entrada a la Atlántida. <br><br>Para continuar presioná 1 o 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", investigarBurbujas)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", investigarBurbujas)
}

function renunciar() {
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

function explorar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Optas por conducir el submarino por el nuevo pasillo que lleva a la fuente de burbujas. De repente la nave es arrastrada hacia abajo, como si estuviera bajo la influencia de un poderoso imán. Pierdes el conocimiento. Al despertar te encuentras en una habitación cómoda y bien iluminada. A tu lado hay tres personas de pie; su aspecto es normal y parecen amistosas. Una de ellas te dice: <br>   - Estás en el mundo inferior de la Atlántida. Esta sala está especialmente destinada a recibir visitas. Si deseas entrar en la ciudad, síguenos, pero tal vez nunca puedas regresar a tu mundo. Si quieres marcharte ahora, te escoltaremos sano y salvo hasta la superficie. Eres tú el que debe decidir. No queremos hacerte daño. <br><br>Si los sigues hasta la ciudad de Atlántida presioná 1. Si vuelves presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", seguir)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", volver2)
}

function salirASuperficie() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">De repente comprendes que el torrente de burbujas tiene potencia suficiente para elevar el submarino. Guías tu nave hasta el torrente burbujeante, donde inmediatamente sale disparada hacia la superficie. Mientras te trasladas en un giro ascendente, empiezas a notar cantidades crecientes de algas marinas. Cerca de la superficie la nave se enreda en las algas. Los instrumentos indican que los propulsores y los mecanismos de dirección no funcionaran. <br>Te pones el traje de buzo y sales a ver qué puedes hacer. Cuando estás fuera, en las algas, te das cuenta de que no podrás liberar al submarino. Nadas hacia la superficie, pero enseguida quedas completamente atascado entre las pegajosas algas. Estás atrapado; no puedes seguir adelante ni volver al submarino. <br><br>Si decides seguir esforzandote para llegar a la superficie presioná 1. Si eliges descansar y elaborar un plan presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", esforzarte)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", descansar)
}

function serAtlante() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Te conducen a una sala con el suelo de mármol. Las paredes brillan. El techo es semejante al interior de un diamante de múltiples caras. <br>Una mujer que a primera vista inspira respeto te hace señales firmes aunque amables para que te acerques a ella. <br>    - Bienvenido a la Atlántida. Miles de años atrás supimos que estábamos a punto de hundirnos en el mar. Nuestro pueblo se preparó para la calamidad construyendo una nueva ciudad en el interior de un volcán extinguido. Desde entonces hemos vivido aquí en paz y armonía. <br>Te habla de un grupo de personas que se llaman nodores. Si lo deseas, puedes vivir con ellos, pero te repite que nunca podrás salir de la Atlántida. <br>Tu escolta será un hombre barbudo. La Atlántida es una ciudad hermosa. Los edificios se funden entre sí, los colores irradian luz y los patios desbordan de ramas de coral. <br>Te encantaría vivir allí, pero no te gusta nada ser prisionero. Es probable que tengas más posibilidades de escapar si te reúnes con los nodores. Preguntas por ellos a tu guía. <br>    -Creemos que son peligrosos, aunque en realidad no lo sabemos. Viven en el centro del viejo volcán. Si deseas ir allí, te acompañaré. <br><br>Si decides unirte a los nodores presioná 1. Si te quedas con los atlantes a la espera de una oportunidad de escapar presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", unirteANodores)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", quedarteConAtlantes)
}

function correr() {
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

function pasadizoSecreto() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Escapas de la nave submarina sin ser visto por la gente. De acuerdo con las instrucciones, entras en un pasadizo. Al final de éste hay una esclusa de aire, y más allá una caverna increíblemente grande, llena de aire. Quizá sea el interior de un volcán extinguido. <br>El lugar es agradable, aunque te resulta extraño. Una suave sustancia cubre el suelo. Parece tener vida, aunque no puedes estar seguro. <br>Se te acerca un grupo de personas que te dedican gestos amistosos. <br>Hablan un idioma que no conoces, pero uno de ellos hace las veces de intérprete. Te enteras de que estás en la Atlántida; también te informan de que el continente está gobernado por un hombre avaro, egoísta y peligroso. Casi todos los demás son esclavos y desdichados, excepto los pocos que actúan como lugartenientes del gobernante. Tus nuevos amigos te piden socorro: tal vez puedas ayudarles a escapar. <br><br>Si decides buscar al gobernante presioná 1. Si decides ayudar a escapar a tus amigos presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", buscarGobernantes)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", ayudarAEscapar)
}

function volverAlSubmarino() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Te introduces rápidamente en el submarino con la intención de huir del extraño submarino. <br>El ascenso a la superficie es rápido, pero cuando estás a unas pocas brazas de la superficie fallan todos los sistemas del submarino. Estás suspendido en el agua, sin posibilidades de hacer nada. Tienes la impresión de que una fuerza misteriosa te ha incapacitado. <br><br>Si decides esperar en el submarino hast recibir ayuda presioná 1. Si eliges escapar para llegar a la superficie por tu cuenta presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", esperarAyuda)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", salirPorTuCuenta)
}

function seguirInvestigando() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Te recibe un grupo de personas semejantes a seres humanos, salvo por el hecho de que llevan en el cuello aberturas parecidas a agallas. Ves que entre los dedos de sus pies desnudos hay una membrana que forma una red. Te ordenan que te pongas el traje de buceo, te sacan rápidamente del submarino y te conducen hacia la ciudad. Durante el camino te muestran el zoo, donde ves animales de la fauna terrestre. Están rodeados por una especie de jaula de cristal llena de aire, lo que les permite vivir bajo el mar. <br>El jefe del grupo te explica que si lo deseas pueden someterte a una operación para que te inserten agallas con las que podrás respirar bajo el agua, o reunirte con los animales del zoo. <br><br>Si aceptas que te operen presioná 1. Si prefieres integrarte al zoo presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", operacion)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", zoo)
}

function retroceder() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Otra vez a bordo del submarino, le indicas por radio al barco que saldrás a la superficie para trazar un plan. Mientras te elevas desde el gigantesco cañón, divisas en la parte superior del saliente algo que parece ser un camino. Los científicos del barco habían mencionado la posibilidad de que encontraras señales de la antigua civilización. Tienes que investigar. <br><br>Para continuar presioná 1 o 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", salirDelSubmarino)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", salirDelSubmarino)
}

// PARTE 6

function hoyo() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">¿Por qué no bajar? ¡Es increíble! ¡El centro de la tierra! Empujas hacia adelante la palanca de mando y te sumerges. Al poco tiempo ya no hay agua: estás rodeado por un gas pesado que actúa de la misma manera que aquélla. De repente tropiezas con una masa pegajosa, que casi obstruye los propulsores de submarino. En ese momento el motor se detiene y te ves arrojado a través de la materia semilíquida por algo semejante a la fuerza de la gravedad y al magnetismo. Pasas por una densa membrana elástica y entras en una zona de gigantescos átomos. Los electrones giran a tu alrededor a gran velocidad, pero hay mucho lugar para maniobrar entre las partículas. Los electrones ruedan alrededor de una pequeña masa que, como sabes, se llama núcleo. Logras evitar choques con los electrones. ¡Qué mundo! Tal vez estás sufriendo alucinaciones. <br><br>Si decides continuar viaje al centro de la tierra presioná 1. Si decides volver presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", seguirViaje)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", volver3)
}

function volver() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Piensas que es demasiado peligroso bucear en un hoyo profundo que puede conducir al centro de la tierra. Lo más sensato será volver a la superficie y trazar un plan de acción. <br>Echas una última mirada a la abertura, controlas los instrumentos del submarino e inicias el ascenso. Por fin la nave llega al aire fresco y a la luz del sol; aguardas hasta que el barco te recoge. <br><br>Para continuar presioná 1 o 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", abandonar)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", abandonar)
}

function seguir() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Te conducen al interior de una inmensa caverna, en cuyo centro ves una enorme máquina plateada. Es una especie de tubo largo con varios paneles redondos adosados a un extremo. <br>Te hacen entrar. Es la sala de control más moderna que hayas visto en tu vida. Ante ti aparece una figura de forma extraña, con una cabeza muy grande y los ojos huecos. <br>    - Ahora estás en la sala de controles de la Atlántida. Ya conoces nuestro secreto. Hemos aterrizado en este planeta hace 3.000 años. Utilizamos nuestro artilugio antimateria para hundir este continente bajo el mar y así huir de los tuyos. Si lo deseas puedes llevar aquí una vida útil y agradable. Basta que nos dejes inyectarte un suero que te permitirá vivir aquí. La decisión queda en tus manos. Por otro lado, si no quieres ser uno de nosotros, te haremos prisionero. <br><br>Si aceptas la inyección presioná 1. Si la rechazas presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", aceptarInyeccion)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", rechazarInyeccion)
}

function volver2() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Los tres atlantes captan tu deseo de regresar a la superficie. Al instante hacen aparecer una cápsula en forma de burbuja y te ponen en su interior. <br>    - Adiós, terráqueo. Ojalá tu vida sea larga y prospera. <br>Sales disparado a través de las aguas y emerges en la superficie, cerca del barco. La cápsula que te protegía se desintegró al llegar a la superficie. <br>A bordo del barco, cuentas tu aventura a la tripulación y a los científicos. Todos son amables contigo, pero nadie te cree. <br>A tu regreso a Estados Unidos realizas una serie televisiva en la que hablas de la Atlántida. Escribes algunos artículos y un libro. Te pagan mucho dinero por estos trabajos, dinero que te sientes tentado a emplear en otra expedición. <br><br>Si inviertes el dinero en otra expedición presioná 1. Si te retiras y vives una vida cómoda presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", nuevaExpedicion)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", retirarse)
}

function esforzarte() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Estás mareado por la falta de oxígeno y por la fatiga. Con el cuchillo cortas las densas algas que te rodean. Vas liberándote poco a poco. Repentinamente sales disparado a través de los restos de algas marinas y asomas a la superficie. Disparas el cohete de señales y poco después te divisa la tripulación del barco. Al poco rato estás a bordo, sano y salvo, rodeado de amigos. ¡Qué alivio haber salido de aquel mundo de pesadilla! <br><br>Si al día siguiente vuelves a bucear presioná 1. Si descansas y esperas unos días para trazar un plan de emergencia presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", volverABucear)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", trazarPlan)
}

function descansar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Lo peor que podrías hacer es caer presa del pánico. Te relajas y te dejas llevar por la corriente, que de repente te arrastra hacia arriba. Con el cuchillo cortas las algas y recuperas la libertad. ¡Qué alivio! <br>Pero en cuanto sales de las algas te ves atrapado en el vórtice de un gigantesco remolino. <br><br>Si intentas salir nadando del remolino presioná 1. Si te sumerges en el vórtice del remolino con la esperanza de tocar fondo y salir presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", salirNadando)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", vortice)
}

function unirteANodores() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">    - Quiero ir con los nodores - le informas a tu guía. <br>El hombre barbudo te conduce a las afueras de la ciudad. <br>    - Ahora debemos separamos. Buena suerte. <br>Los nodores envían un destacamento de recepción fuertemente armado. Sospechan de ti y creen que eres un espía de los atlantes. Su aspecto es exactamente igual al de éstos, pero rara vez sonríen. <br>    - Ven. Tenemos que interrogarte. Quizá trabajarás para nosotros. <br>Durante tres días te interrogan, sin permitirte salir de una pequeña habitación sin ventanas. No son nada afables y sospechas que has cometido un error. Te piden que les ayudes a espiar a los atlantes. Insinúan que en tu condición de espía podrás pasar libremente de un grupo a otro. <br><br>Si decides escapar presioná 1. Si decides aceptar presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", escaparDeNodores)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", aceptar)
}

function quedarteConAtlantes() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Decides quedarte con los atlantes. Su estilo de vida te parece ideal. Pasan el tiempo creando cosas en defensa de la vida y ninguna para destruirla. Te parece que su líder dice la verdad cuando insiste en que hay que evitar la guerra y no fomentar el odio. <br>Te fascina ese mundo aparentemente ideal. Quisieras quedarte para investigar la historia que llevó a la Atlántida a ser lo que es, y averiguar la causa de la escisión entre los atlantes y los nodores. No obstante, en el fondo de tu mente se asienta la esperanza de escapar para volver a tu propio mundo. <br><br>Si decides quedarte presioná 1. Si decides escapar presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", quedarte)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", escaparDeAtlantes)
}

function buscarGobernantes() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">No te lleva mucho tiempo encontrar al rey. Lo encuentras en una habitación pequeña y sencilla, en cuyo techo brilla un extraño destello. <br>    - Así que finalmente has encontrado el camino. Quédate tranquilo, no te haré daño - te sobresalta la resonante voz del rey. A continuación te invita a tomar asiento. <br>Después de varias horas de conversación, piensas que el rey es inteligente y amable. Quizá los atlantes se hayan equivocado en su juicio. <br>El rey te ofrece la posibilidad de participar en su gobierno. Te dice que la mayor parte de su pueblo es gente perezosa y egoísta que necesita ser gobernada con autoridad. Ha sido rey durante casi mil años y ha sobrevivido porque no tiene miedo a ser severo. Ahora quiere que formes parte de su equipo como consejero. <br><br>Si decides aceptar la propuesta del rey presioná 1. Si te niegas presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", aceptarPropuesta)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", negarse)
}

function ayudarAEscapar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">El problema está en saber hacia dónde escapar. El rey lo controla todo, gobierna el mundo submarino, y tiene espías por todas partes. La única respuesta posible consiste en idear un plan para encarcelarlo. <br>Todos están asustados. Años atrás algunos ciudadanos intentaron rebelarse y aún están en prisión. <br>Sugieres organizar una fiesta en la que pondrán en escena una obra de teatro. A una señal acordada, los actores y todo el público se levantarán y apresarán al rey. Los actores tendrán armas de verdad, pero nadie sospechará nada, pues seguirán la trama de la obra. <br>Todos aceptan el plan y te piden que seas su jefe. <br><br>Si accedes a convertirte en jefe presioná 1. Si Si decides ayudarlos con los planes, pero huir de un mundo tan triste presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", serJefe)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", huir)
}

function esperarAyuda() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Lo mejor será esperar a que el barco te localice con el equipo de sonar. Tú no puedes transmitir señales porque no funciona ningún elemento electrónico del submarino. No hay rastros del submarino misterioso. Te asomas por la portilla de gruesos cristales y ves que se dirige hacia tu nave una gigantesca ballena azul. Tienes la impresión de que chocaran. De pronto la ballena golpea tu nave con todas sus fuerzas. El submarino sufre graves daños. Empieza a entrar agua por la tapa de la escotilla. Tienes que abandonar la nave. Ahora la ballena se ha plantado junto al submarino para vigilar Y esperar. <br><br>Si decides tratar de escapar presioná 1. Si intentas montarte sobre la ballena presioná 2. Si no sabes qué hacer presioná 3.  </p>'

    divBtns = document.querySelector(".divBtns")
    divBtns.innerHTML += '<button class="btn btn3">3</button>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", salirPorTuCuenta)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", ballena) 
    btn3 = document.querySelector(".btn3")
    btn3.addEventListener("click", queHacer)
}

function salirPorTuCuenta() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Resuelves que hay un camino de salida: abandonar el submarino y tratar de llegar a la superficie por tu cuenta. Una pequeña balsa salvavidas de color amarillo forma parte de tu equipo. La superficie de las aguas es serena, pero el barco no está a la vista. Durante dos días con sus noches vas a la deriva en la balsa salvavidas, bajo un sol ardiente y a la luz de las estrellas. Al tercer día te localiza un helicóptero de salvamento. Por fin estás a salvo. La exploración de la Atlántida tendrá que quedar a cargo de otro submarinista. La extraña fuerza que inmovilizó al submarino te ha dañado la vista. Tu carrera como aventurero submarino ha concluido. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function operacion() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Una enorme luz blanca te ilumina cuando estás tendido en la mesa de operaciones. Pierdes el conocimiento. Ocupan tu mente pensamientos, sonidos e imágenes placenteras. Al recuperar el sentido no sientes dolor ni percibes ningún cambio. Pero ahora puedes respirar bajo el agua y unirte a los atlantes en su mundo. Durante unas semanas exploras un mundo submarino jamás visto. Tus dos guías se han convertido en dos buenos amigos que te acompañan en tus aventuras por las profundidades, te llevan a explorar el lecho oceánico. Llevas una vida apasionante. Pero aunque te encanta, lamentas no poder volver al mundo terrestre. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function zoo() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">    - No, me niego tajantemente a una operación tan disparatada. ¡No quiero convertirme en un pez! <br>Los atlantes intentan convencerte de que la vida con ellos será dichosa, útil y prolongada. No obstante, te reusas. Te rocían con una neblina especial que te hace perder rápidamente el conocimiento. Varias horas después recuperas el sentido y te encuentras en un depósito submarino de aire en el que respiras con naturalidad. <br>Quizá cometiste un error enorme. Ya no quieren que te unas a su mundo ni que participes de su estilo de vida. Rechazaste su ofrecimiento y ahora estás preso en un zoológico. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

// PARTE 7

function seguirViaje() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Los electrones dan vueltas a velocidades vertiginosas y tú sigues adelante hasta llegar a un punto en el que tus instrumentos indican que el tiempo no existe. Tus sentidos están más aguzados que nunca. Oyes una música maravillosa y ves luces que también tocas y saboreas. Te inunda la paz y el bienestar. Percibes la presencia de otros seres próximos. Te vuelves y ves a tres atlantes. Entonces sientes que el submarino se ha convertido en un mero pensamiento, que la gente de la Atlántida ha entrado en tu mente y está a bordo de tu nave. Intentas penetrar sus pensamientos, pero te dicen que aún no has viajado lo bastante rápido como para ser un viajero del pensamiento. <br><br>Si decides salir de ese extraño mundo presioná 1. Si resuelves viajar en el pensamiento-espacio-tiempo presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", salir)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", viajarET)
}

function volver3() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">No, no te sumergirás hacia el centro de la tierra. Sabes que bajo la delgada capa exterior, las regiones pasan de lo sólido a lo líquido y a continuación a un centro duro. No podrías sobrevivir a semejante viaje. Vuelves a la superficie para consultar con los científicos que están a bordo del barco. Los hombres de ciencia te dicen que sus instrumentos se han averiado, quizá por la proximidad de una tormenta, y también ellos se muestran precavidos. Deciden alejar el barco de las cercanías de ese misterioso hoyo. La expedición abandona y tienes la certeza de que has perdido la oportunidad de descubrir la Atlántida. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function aceptarInyeccion() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">La inyección es indolora y después que te la hayan aplicado no te sientes distinto. Te conducen a un confortable salón donde todos comparten un té especial para celebrar tu decisión. <br>    - Como ves, en el fondo todos los seres vivos son iguales. Nosotros hemos venido de un planeta diferente buscando a otros seres vivos. Pero tenemos que ser muy cuidadosos a la hora de aceptar gente nueva. Nosotros elegimos con gran prudencia. <br>Te sorprenden sus palabras. Te proponen que elijas: puedes viajar con ellos a través del tiempo y del espacio hasta su planeta, o permanecer en la Atlántida sumergida como trabajador con el objetivo de registrar información sobre la vida en la tierra. <br><br>Si deddes viajar con ellos en el tiempo y el espacio presioná 1. Si resuelves quedarte a trabajar en la Atlántida presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", viajarConEllos)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", quedarteEnAtlantida)
}

function rechazarInyeccion() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">La idea te parece espantosa. Tienes que organizar la huida. Cuando se distraen, te escabulles para precipitarte hacia la puerta de la nave espacial. No adviertes que un rayo láser protege la escotilla de salida. Lo pisas y quedas congelado al ir a dar el paso siguiente. Los atlantes te rodean apesadumbrados y te informan de que tendrás que permanecer así durante un tiempo equivalente a 23 años y 61 días terrestres, hasta que se disipen los efectos del láser. Entonces te concederán una segunda oportunidad. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function nuevaExpedicion() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">La única forma de demostrar que no estás loco consiste en organizar otra expedición a la Atlántida. Reúnes todo el dinero ganado y equipas una embarcación, contratas una tripulación, alquilas el submarino y te haces a la mar. La mayoría de la gente piensa que has perdido la cabeza. Pero les demostrarás que se equivocan. <br>Situado en el punto exacto que con tanto cuidado marcaste en las cartas marinas, te sumerges en el submarino. Vuelves a encontrar la cueva oculta y el panel de metal redondeado. <br>Aparentemente, el panel conduce a un pasadizo y está herméticamente cerrado. Intentas abrirlo con el brazo perforador del submarino, pero no cede ni un milímetro. Resulta decepcionante estar tan cerca del secreto y al mismo tiempo tan lejos. <br><br> ¿Volarás el panel con el rayo láser? presioná 1.  Si esperas pacientemente a que te vean y te inviten a entrar presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", volarPanel)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", esperar)
}

function retirarse() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Durante varias semanas discutes contigo mismo sobre la posibilidad de organizar otra expedición. El dinero es lo de menos. Temes que el descubrimiento de la Atlántida signifique la ruina para sus habitantes. Consideras que su civilización debe ser protegida. Decides utilizar el dinero que has ganado para investigar el espacio y la vida en planetas de otras galaxias. Quizás algún día encuentres a los atlantes en el espacio. <br><br><strong>FIN?</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Otro final"
    btn1.addEventListener("click", otroFinal) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function volverABucear() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Insistes en que te sientes muy bien y te empeñas en sumergirte al día siguiente. Los científicos tratan de convencerte de que es un disparate volver a bajar. El capitán del barco te informa de que se aproxima una tempestad y que probablemente el día siguiente sea el único idóneo en mucho tiempo para bucear. Desoyendo todos los consejos, subes al submarino, te despides de tus amigos y desciendes a las profundidades. Estás cansado, pero muy entusiasmado. Cuando llegas al fondo del mar decides explorar el saliente del profundo cañón. <br><br>Presioná 1 o 2 para continuar. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", salirDelSubmarino)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", salirDelSubmarino)
}

function trazarPlan() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Una violenta tempestad se aproxima al punto en el que se encuentran. El capitán decide trasladar el barco al abrigo de un puerto isleño cercano. Es demasiado arriesgado permanecer donde están. Los marineros de cubierta sujetan el submarino a la cubierta del buque y zarpan. <br>La tormenta estalla antes de su llegada al puerto isleño. El submarino se suelta y cae al agua. Los monitores del barco se han estropeado a causa de una terrible descarga eléctrica. Todos están vivos, pero no hay fondos para reponer el equipo averiado. La expedición a la Atlántida ha tocado a su fin. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function salirNadando() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Es en vano. El remolino te tiene en sus garras. Sientes que los brazos y las piernas se retuercen en todas direcciones. No hay solución. Giras, giras y giras. <br><br>Si usas la pistola láser para practicar un boquete en la pared del remolino presioná 1.  Si continúas esforzandote presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", pistolaLaser)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", continuarEsforzandote)
}

function vortice() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Resuelves que no puedes salir del remolino nadando. Lo único que te queda por hacer es una inmersión profunda hacia el centro. <br>Pataleas varias veces y te arrojas al mismísimo centro del remolino. Ante tus ojos danzan luces y colores. Pierdes la noción de dónde estás. Ahora te encuentras parado en el lecho oceánico. Levantas la vista a través del centro del remolino y ves el cielo a más de 600 metros de distancia por encima de tu cabeza. <br><br>Si tratas de volver a la superficie presioná 1. Si te propones explorar la zona presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", volver4)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", explorarZona)
}

function escaparDeNodores() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">La huida será difícil. Lo mejor será decirles que aceptas su oferta de espiar a los atlantes. Se ponen contentos cuando respondes que trabajarás para ellos. <br>    - Los atlantes están celosos de nosotros. Tenemos que estar siempre alerta para que no nos invadan y nos capturen. <br>No lo crees, pero no quieres discutir. Te llevan a las afueras, donde te despides para ir a reunirte con los atlantes. Cuando llegas, les pides que te permitan vivir con ellos. Sabes que jamás podrás abandonar su mundo subacuático, pero conservas la esperanza de poder escapar. Tal vez esa gente te facilitará una buena vida. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function aceptar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">    - De acuerdo, lo haré – dices -. Me sumaré a ustedes y espiaré a los atlantes. A lo mejor no son tan malos como creen. <br>Los nodores están encantados con tu ayuda. Te dan una habitación en un gran edificio, donde viven casi todos. El lugar es gris y lúgubre, más parecido a una cárcel que a cualquier otra cosa. Pasas esa noche en vela, mientras todos duermen, y comprendes que estás preso en una trampa que tú mismo tendiste. Ahora se te ocurre que los nodores provienen de otro planeta y son unos parias desgraciados. Los atlantes no quieren tener nada que ver con ellos. Tu decisión fue equivocada. <br><br><strong>FIN?</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Otro final"
    btn1.addEventListener("click", otroFinal2) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function quedarte() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Quizá los atlantes puedan enseñarte cómo alcanzar esta felicidad en la vida. Investigarás su historia. Cuando anuncias tu decisión te tratan con amabilidad. Miles de años atrás la Atlántida era una civilización avanzada. Los ciudadanos fomentaban sus sentimientos pacíficos y arrancaban de sí todo sentimiento de odio con el mismo cuidado con que se atiende un jardín. Sus mentes se convirtieron en un universo rico y deslumbrante, claro e ilimitado. Tienes tanto que hacer atendiendo las plantas marinas y estudiando historia, que en breve olvidas el submarino. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function escaparDeAtlantes() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">A la primera oportunidad corres hasta la salida del túnel y llegas a las aguas. No suena ninguna alarma. Nadie te persigue. Es extraño: te advirtieron que no te permitirían regresar al mundo terrestre. ¿Por qué te dejan escapar? <br>Nadas hacia la superficie, pero un instante después te desmayas. Nadie sobrevive a las altas presiones y a la falta de oxígeno. Pero ha ocurrido un milagro, porque de pronto te encuentras derribando unas algas pardas que te rodean. Estás a poca distancia de la superficie. <br><br>Presioná 1 o 2 para continuar. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", esforzarte)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", esforzarte)
}

function aceptarPropuesta() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">¡Consejero de un rey! ¡Qué oportunidad! Quizás el rey ha gobernado durante tanto tiempo que ha perdido el contacto con el pueblo. Tal vez en tu condición de consejero puedas ayudar a la gente a obtener lo que desea. <br>Te nombran asesor especial del rey en asuntos de investigación de alimentos y vivienda. Inmediatamente organizas reuniones generales de todo el pueblo. El rey está contento de que sea otro el que se haga cargo de los problemas y lo deja todo en tus manos. Te concede unas tierras y te ofrece un generoso salario. La vida bajo el mar es rica y plena. El pueblo trabaja arduamente y lo hace muy bien. La decisión de quedarte fue acertada. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function negarse() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">¿Consejero de un rey mezquino? ¡Ni soñarlo! Le respondes que no quieres tener nada que ver con un tirano que no cree en su pueblo. El rey suelta una carcajada y te dice que si quieres puedes volver con ellos. Vuelves con tus nuevos amigos y hablan sobre la forma de derrocar al rey y a sus secuaces. Celebran reuniones secretas y esbozan un plan. Pero el día del golpe alguien descubre una filtración en el muro volcánico del mundo subacuático. Toda la civilización está en peligro. Olvidan toda idea de rebelión. Los atlantes deben impedir que el mar se derrumbe sobre ellos.  <br><br>Si decídes trabajar con ellos en este tiempo de desastre presioná 1. Si resuelves aprovechar la emergencia para escapar presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", trabajarJuntos)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", aprovecharse)
}

function serJefe() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">No deseas encabezar una rebelión, pero esa gente te necesita. Organizas la representación; el rey está encantado de que su pueblo participe en un proyecto que le mantiene ocupado y feliz. Los súbditos no ven la hora de encarcelar al rey y poder tomar sus propias decisiones. <br>La noche de la representación, el teatro está absolutamente lleno. Todos esperan la aparición del rey, pero éste se demora. La multitud se pone nerviosa. Más tarde llega al teatro un mensajero y anuncia que el rey ha sufrido un grave ataque de encefalitis, del que quizá no salga con vida. <br>Te preguntas si el rey estará realmente enfermo o si habrá descubierto la conspiración. La gente está confundida y no sabe qué hacer. Te consultan y les aconsejas que sigan adelante con la obra. En ese momento entra en el teatro un pelotón de soldados del rey. Se encaminan directamente hacia ti. <br><br>Si te dejas apresar presioná 1. Si intentas escapar presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", dejarseApresar)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", intentarEscapar)
}

function huir() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Estás dispuesto a ayudarlos en la planificación del derrocamiento del rey, pero no quieres participar activamente en la revuelta. En el fondo lo que realmente quieres es volver a tu propio mundo. Abrigas la esperanza de poder largarte cuando la rebelión esté en curso. El día de la rebelión no puedes permanecer impasible ante la valiente iniciativa de los atlantes: decides permanecer a su lado y ayudarles en todo lo que puedas. La esmerada planificación y el esfuerzo del entrenamiento dan buenos resultados. Un grupo de hombres y mujeres atentamente seleccionados captura al rey y a sus guardias con gran facilidad. La rebelión ha triunfado sin derramamiento de sangre, y el pueblo lo celebra durante días enteros. Los atlantes te tratan como si fueras uno de ellos y, por primera vez, sientes que realmente lo eres. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function ballena() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Sabes de buzos que dan breves paseos sujetos a las aletas de las ballenas. Parece un disparate, pero tal vez ésta sea tu única vía de escape. Abandonas el submarino, nadas hasta la ballena y te coges de una de sus aletas. El gigantesco mamífero empieza a nadar en dirección a la superficie. Tienes algunas dificultades para mantenerte sujeto. Luego la ballena asoma a la superficie y allí permanece, llenándose los pulmones de aire. Tú te alejas tranquilamente nadando. Pasas dos o tres días a la deriva, dormitando y despertando sin dificultades. Conservas el calor gracias a tu traje aislante, mientras sus reservas de aire te mantienen a flote. Tienes hambre y sed, pero estás ileso cuando el helicóptero de salvamento te localiza balanceándote sobre las olas. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function queHacer() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Reconoces que no sabes qué hacer. El aspecto de la ballena es terrorífico y no se te ocurre ningún plan de fuga. Resuelves esperar, atento a todo lo que ocurra.Después de un tiempo que a ti te parece una eternidad, aunque probablemente sólo hayan transcurrido unos minutos, regresa el misterioso submarino, engancha un cable al submarino y te arrastra hasta la superficie. A continuación desaparece bajo las olas, dejándote a la espera del barco. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

// PARTE 8

function salir() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Esto es demasiado para ti. Tienes la impresión de estar en una pesadilla y decides volver. Pero volver es mucho más difícil de lo que creías. Resulta muy difícil guiar al submarino en el laberinto de átomos. Ahora los instrumentos son inútiles. Desaparecen las figuras de los atlantes. Pierdes el conocimiento. Recuperas el sentido horas más tarde, flotando con tu traje de buzo por encima del hueco del fondo oceánico. El submarino ha desaparecido. Estás atontado: ¿habrá sido todo un sueño? Asciendes lentamente a la superficie, pero el barco también ha desaparecido. No puedes saber cuánto tiempo ha pasado. Comprendes que la tripulación debió de pensar que habías desaparecido para siempre y sabes que tienen razón. Las olas mecen tu cuerpo, que no ofrece resistencia, mientras flotas solo en el vasto mar. Lentamente tus fuerzas te abandonan. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function viajarET() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">¡Un viajero del pensamiento! Te das cuenta de que eso es lo que siempre hace la gente cuando sueña. Los atlantes te dicen serenamente que todo es igual: pasado, presente y futuro son lo mismo. Basta que te concentres y pongas tus pensamientos donde desees que estén. Lo intentas; sorprendentemente atraviesas el tiempo a gran velocidad hasta el día en que naciste, y luego hasta el día en que por primera vez hiciste submarinismo en alta mar. Tu mente vuela de un momento de tu vida a otro. Pero cuando decides pasar al futuro te encuentras ante un muro en blanco. Aparentemente no puedes viajar al futuro. <br>    - ¿Por qué no puedo adelantarme en el tiempo? - preguntas a los atlantes. <br>    - Ten paciencia - responden. - Cada cosa a su tiempo. <br>De repente giras a través del tiempo y sales a los confines exteriores del universo, donde sientes que la luz pasa a través de ti. No proyectas ninguna sombra. Te inunda una agradable sensación de paz. <br><br>Si decides quedarte presioná 1. Si decides esperar para tomar una decisión más meditada,  presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", quedarte2)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", meditar)
}

function viajarConEllos() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">    - Iré con vosotros. Me interesa mucho ver otras partes del universo. <br>    - Felicitaciones. No te arrepentirás. Estamos listos para partir. <br>Te llevan a una sala pequeña y tres de ellos se detienen contigo bajo un rayo de intensa luz. Experimentas una sensación de velocidad, aunque no te mueves. Tienes la impresión de haber viajado cientos de miles de kilómetros en el espacio. Pasas junto al sol, atraviesas la vía láctea y otras galaxias. <br>Ahora te encuentras en el planeta Aygr, el lugar de origen de los atlantes. Ves un mundo de fantásticas figuras y plantas extrañas. La ciudad brilla como mil focos de luz. No distingues personas, sino formas de una luz muy brillante, que se mueven. De repente, algunas se convierten en atlantes. <br>    - Lo importante no son nuestros cuerpos, sino nuestra energía. Si lo deseas puedes vernos en nuestras formas corporales, que sólo utilizamos para comunicarnos con gente como tú. Puedes optar por permanecer como eres o aceptar la transformación. <br><br>Si decides conservar tu forma corporal presioná 1. Si resuelves convertirte en una forma energética presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", conservarForma)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", convertirte)
}

function quedarteEnAtlantida() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Has tenido ya suficientes aventuras. Viajar a otro planeta de una galaxia diferente parece más arriesgado de lo que estás dispuesto a reconocer. Además, puedes dejarlo para más adelante. Les dices que quieres quedarte para trabajar en su sociedad. Probablemente tus conocimientos del mar puedan serles útiles. Durante unos días discuten seriamente tu caso. Concluidas las conversaciones, te ofrecen un par de opciones para trabajar en la Atlántida. Puedes elegir entre ser granjero o músico. <br><br>Si decides ser granjero submarino presioná 1. Si resuelves hacerte músico presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", granjero)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", musico)
}

function volarPanel() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Tratarás de hacer saltar la escotilla de sus bisagras. Puedes hacerlo. Presionas el botón rojo que dispara el cañón láser. Al instante estalla un relámpago cegador. Pero la escotilla permanece en su sitio. Vuelves a disparar, disparas y disparas. Cada vez que lo haces el submarino se balancea por la fuerza del láser. Sigues disparando, sin apartar el dedo del botón. Entonces estalla un rayo similar en el interior del submarino. El cañón láser ha explotado. Tú y el submarino quedan destrozados en un instante. La escotilla sigue cerrada. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function esperar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">No está bien que utilices la fuerza, a no ser que te ataquen y debas defenderte. Te niegas a pensar siquiera en la posibilidad de utilizar el cañón láser, que podría matar a alguien y sin duda alguna destruiría cualquier posibilidad de entente amistosa. Decides esperar pacientemente, con la esperanza de que te vean y te inviten a entrar. Durante seis horas esperas tranquilamente a que aparezca alguna señal. Más allá aparece un destello verdoso que baña al submarino con una tenue luz. Se abre la escotilla. Salen tres figuras y te hacen señas de que les sigas. <br><br>Si decides seguirlos presioná 1. Si te niegas a seguirlos presioná 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", seguirlos)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", noSeguirlos)   
}

function otroFinal() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Discutes contigo mismo semanas enteras. Resuelves volver a la Atlántida. Tienes tanta prisa por regresar que contratas una pequeña nave hidroplano muy veloz, para trasladarte al punto oceánico en el que se encuentra la Atlántida. ¡Tienes la intención de sumergirte en cuanto llegues sólo con tu equipo de buceo! Sabes que es imposible bucear a más de 600 metros de profundidad. Pero no te importa: sabes que debes intentarlo. Una tempestad azota el mar seis días seguidos y en cuanto se despeja te dispones a zambullirte. Precisamente cuando te introduces en el agua levantas la vista al cielo y en lo alto, más allá de las nubes, divisas la centelleante ciudad de la Atlántida. No era necesario sumergirse. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function pistolaLaser() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Llevas una pistola láser para casos de emergencia. Abres un boquete en la pared del remolino y te zambulles. Nadas lentamente en dirección a la superficie. El barco no está a la vista. De pronto, una enorme ballena sale a la superficie y se queda muy cerca. Tardas media hora en nadar hasta el enorme mamífero, que no te presta la menor atención. Trepas por su cola y avanzas a gatas hasta lo más alto de su lomo. Desde tu posición ves el barco y el minúsculo destello de las lentes de los prismáticos reflejado en el sol. La tripulación del barco está vigilando a la ballena Agitas los brazos, con la certeza de que te han visto. Poco después irán a rescatarte. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function continuarEsforzandote() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Te desmayas. Cuando recuperas el conocimiento estás flotando en la superficie del océano. Hay una fuerte marejada y el sol te da de lleno. Con toda probabilidad el remolino ceso tan rápida y misteriosamente como había empezado. Sientes un leve mareo y estás agotado. Cuando meneas la cabeza en el interior del casco sientes que un intenso dolor te recorre la sien derecha. El dolor se agudiza. Empiezas a perder el sentido. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function volver4() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">El remolino parece una sierra con inclinación ascendente hacia la superficie. El agua brota a tal velocidad que el centro parece estar en la más absoluta calma. Piensas que quizá podrías nadar a través de esa calma. Vale la pena intentarlo. Sin siquiera llegar a saber si avanzas, el remolino se invierte y en lugar de girar hacia abajo gira hacia arriba y te catapulta fuera de las aguas, al aire libre. Caes sobre la superficie del mar, en las proximidades del barco. Aunque estás aturdido por la caída, recuperas enseguida el sentido. Desde el barco te izan. Por supuesto, nadie te cree, pero entonces hasta tú mismo piensas que es algo demasiado fantástico para que pueda ser cierto. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function explorarZona() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Sobre el fondo del mar hay una pequeña escotilla metálica. Tiras de ella con todas tus fuerzas, pero no se abre. Descansas un momento y miras a través de la muralla de agua que te rodea. ¡Dos peces te contemplan! Tienes la impresión de estar encerrado en un acuario para que ellos te observen. No oyes nada cuando se abre la escotilla. Una voz te ordena que entres. Asustado y con gran cautela, bajas un pasillo que conduce a una sala pequeña. Tres personas salen a tu encuentro. <br><br>Para continuar presioná 1 o 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", seguir)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", seguir) 
}

function otroFinal2() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Durante la noche te despiertan unas palabras dichas en voz baja. Prestas atención y te enteras de que un grupo de nodores tienen la intención de fugarse. Quieren unirse a los atlantes. Tienen la convicción de que en la Atlántida la vida será mejor para ellos. Te unes al grupo y no oyes más que relatos de miedo y oscuridad. Ellos quieren la luz y la amistad. Parece sencillo pero nada es fácil. <br>De improviso, la puerta se abre de par en par. Tres guardias con armas especiales se precipitan al interior de la estancia. Disparan sus armas y tú y tus compañeros se evaporan en un destello de brillante luz. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function trabajarJuntos() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Años atrás los atlantes habían elaborado planes para casos de emergencia, pero la mayoría de la gente los ha olvidado. Un anciano recuerda dónde se guardaban las instrucciones y los equipos. Tú y todos los atlantes trabajan sin descanso durante 72 horas, achicando el agua de la inundación y construyendo un muro de contención alrededor de la grieta del volcán. Finalmente desconectan la última bomba aspirante. Están exhaustos, pero le han ganado la batalla al mar. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function aprovecharse() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Como todos están preocupados por la filtración que permite la entrada del agua del mar, nadie notará que intentas fugarte. Corres por un largo pasillo muy poco transitado que conduce hasta el mar. La puerta de salida es pesada y está oxidada por la falta de uso. Empujas con todas tus fuerzas hasta que cede y te encuentras en una esclusa de aire que da al mar abierto. Accionas el botón de emergencia y sales disparado hacia las aguas. El submarino está donde lo dejaste y una vez en su interior te diriges a la superficie, donde te espera el barco. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function dejarseApresar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Es inútil intentar escapar de los soldados. Estás rodeado. Te llevan ante el rey y éste te dice, apenado, que eres igual que los demás. No puede confiar en nadie. Tendrá que decidir qué hacer contigo; entretanto te arrojan al calabozo. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function intentarEscapar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">¿Cómo harás para huir? Los soldados van en tu busca. Gritas con toda la fuerza de tus pulmones y el público te rodea, formando una barrera entre tú y los soldados. Éstos observan ceñudos a los asistentes y después de un instante de vacilación, se retiran. Saben que tienen muy pocas probabilidades de salir vencedores en una lucha tan desigual. Todos gritan pidiendo que se lleve a cabo la rebelión. La muchedumbre abandona el teatro y se dirige a la residencia real. A lo largo del camino mucha gente se suma a la multitud, incluso soldados. Son libres. El rey es encarcelado. La rebelión ha sido un éxito. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

// PARTE 9

function quedarte2() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Después de más de mil años de viaje, eres convocado a la sala principal del pensamiento. Te informan de que ahora puedes volver a vivir en la tierra. Tienes tus dudas en cuanto a regresar, pero sientes curiosidad por ver qué cambios se han producido mientras vivías en la Atlántida. ¡Qué panorama el que te encuentras cuando trazas círculos alrededor de la tierra a una altura de trescientos metros! Las grandes urbes del mundo, Nueva York, Londres, París y Hong Kong están cubiertas de vegetación. Las rutas que llevan a las ciudades son apenas visibles. Pero descubres indicios de nuevos asentamientos. Hay grupos de edificios dispersos en el campo. No ves ninguna chimenea. Hay muy pocos campos y no aparecen coches a la vista. La gente vive una vida sencilla y se provee a sí misma de alimentos, techo y ropa. Sientes un vivo deseo de unirte a ellos. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function meditar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Un día tus amigos, los atlantes, te comunican que si lo deseas puedes regresar a la tierra. Reflexionas atentamente y decides que en virtud de tu capacidad de viajar por el pensamiento, la vida que ahora llevas es la que deseas. Resuelves quedarte allí para siempre. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function conservarForma() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">No puedes renunciar a tu cuerpo. Quizá para los atlantes sea bueno existir como pura energía, pero tú no has llegado al extremo de estar dispuesto a arriesgar lo que eres para convertirte en lo que ellos son. Resulta extraño deambular con brillantes manchas de energía a tu alrededor. Te piden que des charlas sobre la tierra tal como la conoces y tú aceptas la propuesta. Los atlantes se muestran interesados por todos los aspectos de la vida terráquea: la tecnología, la política, las guerras, las religiones. Les preguntas por qué tienen tanto interés, pero nunca te dan una respuesta directa. Un día, tiempo después, te miras de arriba abajo y sólo ves una emanación de energía brillante. Comprendes, horrorizado, que te has transformado en uno de ellos. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function convertirte() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Estás en la Atlántida, ¿por qué no convertirte en un atlante? Te miras las manos y ves que gradualmente comienzan a despedir una cálida luz amarilla. Poco a poco el brillo sube por tus brazos y tus piernas hasta que ya no te queda cuerpo. Eres una brillante figura energética. Experimentas una sensación de libertad y de dicha hasta entonces desconocida. Puedes flotar, volar o salir disparado a donde quieras. No necesitas alimentos ni descanso. Estás capacitado para viajar a través del tiempo y puedes regresar al instante a la tierra en tu forma energética. <br>Sientes que es así como quieres ser. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function granjero() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Disfrutas de la tarea agrícola bajo el mar. En las afueras de la Atlántida hay campos de plantas marinas que se trabajan como los huertos de la tierra. Los atlantes salen todos los días a recoger plantas, cuidar los campos y alejar a los peces propensos a mordisquear las plantas en proceso de crecimiento. También hay que atender los corrales de peces, donde los alimentas y atiendes hasta que resultan necesarios como alimento. Trabajar en una granja bajo el mar es hermoso y mucho más fácil de lo que imaginabas. No obstante, a veces acecha el peligro. Tienes que estar permanentemente atento. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function musico() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">¡Músico en el mundo de la Atlántida! ¿Quién podría creerlo? Te dicen que elijas un instrumento. Examinas atentamente una amplia variedad de instrumentos electrónicos. Te decides por uno, pero descubres que no produce ningún sonido. Los atlantes te dicen que sus instrumentos producen una música que se siente en lugar de oírse. ¡En qué mundo vives! ¿Quién puede creer en una música que no se oye? Poco a poco aprendes a percibir las diferentes notas con distintas partes de tu cuerpo: los muslos, el pecho, las sienes, las yemas de los dedos. Tu interés por esta nueva forma de sentir la música crece día a día. Finalmente dominas esta nueva expresión artística: has llegado a ser el mejor músico de la Atlántida. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function seguirlos() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Te conducen a una sala de controles, donde conoces al comandante de un centro científico subacuático, que tiene la misión de realizar investigaciones secretas sobre la vida bajo el mar. Te informan de que hiciste bien no utilizando el cañón láser, pues tienen ingenios antiláser que los habrían hecho trizas a ti y al submarino. Después de una deliciosa comida y una visita al laboratorio en aguas profundas, te devuelven al submarino para que regreses a la superficie. Te dicen que jamás debes volver, pues de lo contrario quedarás prisionero durante el resto de tu vida. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

function noSeguirlos() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Ante tu negativa a seguirlos, te sumen en un trance profundo con unos pequeños hipnotizadores manuales. Te conducen a través de un largo túnel hasta un gran laboratorio subacuático. Tres técnicos militares se acercan a ti y te sacan del trance. <br>    - Has tropezado con una base militar secreta. Estamos elaborando planes secretos y no podemos correr el riesgo de ser descubiertos. Te encarcelaremos. <br>No hay salida. <br><br><strong>FIN</strong></p>'

    btn1 = document.querySelector(".btn1")
    btn1.textContent = "Volver a jugar"
    btn1.addEventListener("click", iniciarLibro) 
    btn2 = document.querySelector(".btn2")
    btn2.textContent = "Salir del juego"
    btn2.addEventListener("click", mostrarFinal)
}

// FINAL

function mostrarFinal(evt){
    evt.preventDefault()

    const final = new Date()
    const hora = final.getHours()
    
    const tituloDespedida = hora>6 && hora<=12 ? Swal.fire ({
        title: despedida1,
        customClass: 'sweetAlert2',
        timer: 2000
    }) : 
    hora >12 && hora <=19 ? Swal.fire ({
        title: despedida2,
        customClass: 'sweetAlert2',
        timer: 2000
    }) : Swal.fire ({
        title: despedida3,
        customClass: 'sweetAlert2',
        timer: 2000
    })

    divFormulario.innerHTML = `
    <form action="" class="formulario">
        <p class="parrafo">¡Gracias por jugar ${nombre}! </p>
    </form>`
}