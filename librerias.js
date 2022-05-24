
import {darkMode, lightMode} from "./themesModules.js"

let boton = document.querySelector("#boton");

let btnVoz = document.querySelector(".btnVoz")
btnVoz.addEventListener("click", hablar)

function hablar(evt){
    evt.preventDefault()

    let voz = new SpeechSynthesisUtterance();
    voz.text = document .querySelector(".divFormulario").textContent
    voz.lang = "es-AR"
    speechSynthesis.speak(voz)
}


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

const fondo = document.querySelector(".fondo")
const divFormulario = document.querySelector(".divFormulario")
// const botonInicio = document.querySelector(".btnInicio")
let btnInicio
let edad;
let nombre;

const despedida = [`¡Que tengas un buen día!`, `¡Que tengas buenas tardes!`, `¡Que tengas buenas noches!`]

const [despedida1, despedida2, despedida3] = despedida

console.log (...despedida)

const final1 = new Date()
const hora1 = final1.getHours()



mostrarInicio() 



function mostrarInicio () {
    // fondo.setAttribute('src', "Img/fondo.jpg")
    divFormulario.innerHTML = '<button type="button" class="btnInicio" value="inicio"></button>'

    btnInicio = document.querySelector(".btnInicio")
    btnInicio.textContent = "INICIO"
    btnInicio.addEventListener("click", inicio)
}



function inicio() {

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

            // if((hora1 >6) && (hora1 <=12)){
            //     tituloDespedida.textContent = despedida1
            // } else if ((hora1 >12) && (hora1 <=19)) {
            //     tituloDespedida.textContent = despedida2
            // } else {
            //     tituloDespedida.textContent = despedida3
            // }

            hora1>6 && hora1<=12 ? tituloDespedida.textContent = despedida1 : 
            hora1 >12 && hora1 <=19 ? tituloDespedida.textContent = despedida2 : tituloDespedida.textContent = despedida3
        }
    })
}

function validarJugador() {

    // fondo.setAttribute('src', "Img/fondo.jpg")
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

    const divComienzo = document.createElement("div")

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
    

    if ((edad >=18) && !(nombre.length ===0)) {
        
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
    } else if (((edad <18) || (edad ===null) || (edad ===' ')) && !(nombre.length ===0)){
        Swal.fire ({
            icon: 'error',
            title: "Tenes menos de 18 años, no podes jugar",
            showConfirmButton: true,
            showCloseButton: true,
            confirmButtonText: 'Aceptar',
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
        // formulario2.style.display = "none"
        Swal.fire ({
        icon: 'error',
        title: "Debe ingresar un nombre",
        showConfirmButton: true,
        showCloseButton: true,
        confirmButtonText: 'Aceptar',
        })
    } else {
        // formulario2.style.display = "none"
        Swal.fire ({
        icon: 'error',
        title: "Debe completar los datos",
        showConfirmButton: true,
        showCloseButton: true,
        confirmButtonText: 'Aceptar',
    })
    }
}

const libros = [
    {
        img: "VBEM.jpg", 
        id: "0",
        titulo: "Viaje bajo el mar. ", 
        paginas: "144"
    },
    {
        img: "LCDP.jpg",
        id: "1", 
        titulo: "La casa del peligro. ", 
        paginas: "128"},
    {   
        img: "EMDLM.jpg", 
        id: "2", 
        titulo: "El misterio de los mayas. ", 
        paginas: "160"
    }
];

console.log (libros?.disponible || "La propiedad no existe")

function comenzarJuego(evt){
    evt.preventDefault()

    divFormulario.innerHTML = '<form action="" class="formulario"></form>'

    let formulario2 = document.querySelector(".formulario")

    const eleccionLibro = document.createElement("div")
    eleccionLibro.classList.add("eleccionLibro")

    for (let i = 0; i < libros.length; i +=1) {
        const divLibros = document.createElement("div");
        divLibros.classList.add ("divLibros");

        const imgLibros = document.createElement("img");
        imgLibros.classList.add("imgLibros");
        imgLibros.src = `Img/${libros[i].img}`;

        const tituloLibros = document.createElement("h4")
        tituloLibros.classList.add("tituloLibros");
        tituloLibros.textContent = libros[i].titulo;
        
        const inputLibros = document.createElement("input");
        inputLibros.classList.add("inputLibros");
        inputLibros.setAttribute("type", "radio");
        inputLibros.setAttribute("name", "libros[]")
        inputLibros.setAttribute("id", "Libro" + `${libros[i].id}`)

        divLibros.appendChild(imgLibros);
        divLibros.appendChild(tituloLibros);
        divLibros.appendChild(inputLibros);
        eleccionLibro.appendChild(divLibros);
    }

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
            //alert("disponible")
            iniciarLibro()
    } else {
        Swal.fire ({
            icon: 'error',
            title: "El libro seleccionado no está disponible por el momento, seleccione otra opción",
            showConfirmButton: true,
            showCloseButton: true,
            confirmButtonText: 'Aceptar',
        })
    }
}

function iniciarLibro() {

    divFormulario.innerHTML = '<form action="" class="formulario"></form>'

    let formulario3 = document.querySelector(".formulario")

    const divTexto = document.createElement("div")
    divTexto.classList.add("divTexto")

    const divBtns = document.createElement("div")
    divBtns.classList.add("divBtns")

    const parrafo = document.createElement("p")
    parrafo.classList.add("parrafo")
    parrafo.textContent = "Eres explorador submarino. En este momento zarpas con el propósito de explorar las aguas más profundas. Tienes que encontrar la ciudad perdida de Atlántida: la misión más apasionante que te han encomendado. Subís con tu equipo y tu traje especial a tu nave submarina. Comienza el descenso a las profundidades del oceano, con la ayuda de un cable delgado aunque resistente. La nave llega a una saliente cercana al lecho del océano. Si decides, puedes salir a explorar el saliente. Sino, puedes soltar el cable y explorar el lecho con el submarino. "
    //hablar(parrafo.textContent)

    const parrafo2 = document.createElement("p")
    parrafo2.classList.add("parrafo")
    parrafo2.textContent = "Si decides explorar el saliente presioná 1. ";
    parrafo2.textContent += "Si decides explorar con el submarino presioná 2"
    //hablar(parrafo2.textContent)


    // Yo quiero que al presionar este boton se ejecute la funcion hablar. pero si pongo un addEventListener con un click, lo escucha y vuelve al principio
/*     let btnVoz = document.createElement("button")
    btnVoz.classList.add("btnVoz")
    btnVoz.textContent = "Voz" */

    const btn1 = document.createElement("button")
    btn1.textContent = "1"
    btn1.classList.add("btn")
    const btn2 = document.createElement("button")
    btn2.textContent = "2"
    btn2.classList.add("btn")

    divTexto.appendChild(parrafo)
    divTexto.appendChild(parrafo2)
    divBtns.appendChild(btn1)
    divBtns.appendChild(btn2)
    formulario3.appendChild(divTexto)
    // formulario3.appendChild(btnVoz)
    formulario3.appendChild(divBtns)

    // btnVoz.addEventListener("click", hablar)

/*     btnVoz.addEventListener("click", (evt) => {
            evt.preventDefault()
        
            let voz = new SpeechSynthesisUtterance();
            voz.text = parrafo.textContent;
            voz.text += parrafo2.textContent;
            voz.lang = "es-AR"
            speechSynthesis.speak(voz)
        }) */
/*     btnVoz.addEventListener("dblclick", (evt) => {
        evt.preventDefault()
        speechSynthesis.pause(voz)
    }) */
    
    btn1.addEventListener("click", salirDelSubmarino)
    btn2.addEventListener("click", soltarCable)
    
}

// PARTE 1

function salirDelSubmarino () {
    divFormulario.innerHTML = '<form action="" class="formulario"></form>'

    let formulario3 = document.querySelector(".formulario")

    let divTexto = document.createElement("div")
    divTexto.classList.add("divTexto")

    let divBtns = document.createElement("div")
    divBtns.classList.add("divBtns")

    let parrafo = document.createElement("p")
    parrafo.classList.add("parrafo")
    parrafo.textContent = "Sales del submarino maravillado por el mundo extraño que encuentras. Comienzas a explorar con ayuda de tu reflector de mano. De pronto pasa a tu lado un cardumen a gran velocidad. Giras para ver de que se trata y descubres que la nave está en poder de un enorme monstruo submarino. Sabes que tu traje no te protejerá contra semejante mostruo."
    //hablar(parrafo.textContent)

    let parrafo2 = document.createElement("p")
    parrafo2.classList.add("parrafo")
    parrafo2.textContent = "Si decides esconderte ingresá 1. ";
    parrafo2.textContent += "Si decides escapar ingresá 2"
    //hablar(parrafo2.textContent)
    
    let btn1 = document.createElement("button")
    btn1.textContent = "1"
    btn1.classList.add("btn")
    let btn2 = document.createElement("button")
    btn2.textContent = "2"
    btn2.classList.add("btn")

    divTexto.appendChild(parrafo)
    divTexto.appendChild(parrafo2)
    divBtns.appendChild(btn1)
    divBtns.appendChild(btn2)
    formulario3.appendChild(divTexto)
    formulario3.appendChild(divBtns)

    btn1.addEventListener("click", esconderte)
    btn2.addEventListener("click", escapar)
}

function soltarCable () {
    divFormulario.innerHTML = '<form action="" class="formulario"></form>'

    let formulario3 = document.querySelector(".formulario")

    let divTexto = document.createElement("div")
    divTexto.classList.add("divTexto")

    let divBtns = document.createElement("div")
    divBtns.classList.add("divBtns")

    let parrafo = document.createElement("p")
    parrafo.classList.add("parrafo")
    parrafo.textContent = "Indicas por radio la situación. Avisas que soltarás el cable. Dan su aprovación. Enciendes el reflector de la nave. A la izquierda visualizas una cueva. A la derecha observas como ascienen constantemente burbujas desde el fondo del cañon."
    //hablar(parrafo.textContent)

    let parrafo2 = document.createElement("p")
    parrafo2.classList.add("parrafo")
    parrafo2.textContent = "Para investigar la cueva presioná 1. ";
    parrafo2.textContent += "Para investigar las burbujas presioná 2"
    //hablar(parrafo2.textContent)
    
    let btn1 = document.createElement("button")
    btn1.textContent = "1"
    btn1.classList.add("btn")
    let btn2 = document.createElement("button")
    btn2.textContent = "2"
    btn2.classList.add("btn")

    divTexto.appendChild(parrafo)
    divTexto.appendChild(parrafo2)
    divBtns.appendChild(btn1)
    divBtns.appendChild(btn2)
    formulario3.appendChild(divTexto)
    formulario3.appendChild(divBtns)

    btn1.addEventListener("click", investigarCueva)
    btn2.addEventListener("click", investigarBurbujas)
}

// PARTE 2

function esconderte() {
    divFormulario.innerHTML = '<form action="" class="formulario"></form>'

    let formulario3 = document.querySelector(".formulario")

    let divTexto = document.createElement("div")
    divTexto.classList.add("divTexto")

    let divBtns = document.createElement("div")
    divBtns.classList.add("divBtns")

    let parrafo = document.createElement("p")
    parrafo.classList.add("parrafo")
    parrafo.textContent = "El gigantesco calamar se revuelve y vuelca el submarino, pero al fin, se cansa del juego y se aleja. Ahora eres libre de abandonar el escondite y revisar la nave para averiguar si está averiada. Descubres que la entrada está averiada. No puedes entrar. No obstante, la tripulación del barco sospechó que estabas en dificultades cuando no respondiste a un control rutinario por radio. Ahora están bajando una plataforma de salvamento. En cuanto estás en la plataforma les avisas para que empiecen a izarla lentamente hacia la superficie. Tendrán que subirte con gran lentitud, a fin de que no contraigas la enfermedad de la descompresión (la rápida expansión de burbujas de nitrógeno en la sangre). En el preciso instante en que la plataforma comienza a moverse, el calamar gigante reaparece de imprevisto, como salido de la nada. Va directamente hacia ti."
    // hablar(parrafo.textContent)

    let parrafo2 = document.createElement("p")
    parrafo2.classList.add("parrafo")
    parrafo2.textContent = "Para luchar contra el calamar elegí 1. Si elegis indicar que te suban a toda velocidad, aún sabiendo que contraerás la enfermedad de la descompresión ingresá 2."
    // hablar(parrafo2.textContent)

    let btn1 = document.createElement("button")
    btn1.textContent = "1"
    btn1.classList.add("btn")
    let btn2 = document.createElement("button")
    btn2.textContent = "2"
    btn2.classList.add("btn")

    divTexto.appendChild(parrafo)
    divTexto.appendChild(parrafo2)
    divBtns.appendChild(btn1)
    divBtns.appendChild(btn2)
    formulario3.appendChild(divTexto)
    formulario3.appendChild(divBtns)

    btn1.addEventListener("click", lucharContraCalamar)
    btn2.addEventListener("click", subirRapido)
}

function escapar() {
    divFormulario.innerHTML = '<form action="" class="formulario"></form>'

    let formulario3 = document.querySelector(".formulario")

    let divTexto = document.createElement("div")
    divTexto.classList.add("divTexto")

    let divBtns = document.createElement("div")
    divBtns.classList.add("divBtns")

    let parrafo = document.createElement("p")
    parrafo.classList.add("parrafo")
    parrafo.textContent = "Con movimientos prudentes abandonas el submarino en las garras del gigantesco calamar. Planeas pedir ayuda dejando flotar un rotulador que llegará a la superficie y dejará en el agua un brillante manchón amarillo. Los hombres de la tripulación tienen instrucciones de estar atentos a esas señales de emergencia. En cuanto las descubran te enviarán ayuda. Cuando llegas al saliente del cañón te sientes un poco más seguro, pero en ese momento ves al más temible de los seres marinos: un tiburón. Tienes la certeza de que eres su blanco. Quizá deberías accionar la carga protectora de emergencia que te enviaría inmediatamente a la superficie. Pero el tiburón es rápido y tal vez podría agarrarte. Sabes también que en razón del rápido ascenso contraerías la enfermedad de la descompresión."
    // hablar(parrafo.textContent)
    
    let parrafo2 = document.createElement("p")
    parrafo2.classList.add("parrafo")
    parrafo2.textContent = "Si decides disparar la carga especial,para llegar a la superficie ingresá 1. Si resuelves permanecer inmóvil con la esperanza de que el tiburón se aleje ingresá 2."
    // hablar(parrafo2.textContent)

    let btn1 = document.createElement("button")
    btn1.textContent = "1"
    btn1.classList.add("btn")
    let btn2 = document.createElement("button")
    btn2.textContent = "2"
    btn2.classList.add("btn")

    divTexto.appendChild(parrafo)
    divTexto.appendChild(parrafo2)
    divBtns.appendChild(btn1)
    divBtns.appendChild(btn2)
    formulario3.appendChild(divTexto)
    formulario3.appendChild(divBtns)

    btn1.addEventListener("click", dispararCarga)
    btn2.addEventListener("click", permanecerInmovil)
}

function investigarCueva () {
    divFormulario.innerHTML = '<form action="" class="formulario"></form>'

    let formulario3 = document.querySelector(".formulario")

    let divTexto = document.createElement("div")
    divTexto.classList.add("divTexto")

    let divBtns = document.createElement("div")
    divBtns.classList.add("divBtns")

    let parrafo = document.createElement("p")
    parrafo.classList.add("parrafo")
    parrafo.textContent = "Con mucho cuidado conduces el submarino entre las paredes del cañón. Descubres en el fondo un gran hoyo del que emanan las burbujas. El submarino cuenta con un equipo científico para analizarlas. Tiene también un sonar que puede medir las profundidades de cualquier cavidad."
    // hablar(parrafo.textContent)

    let parrafo2 = document.createElement("p")
    parrafo2.classList.add("parrafo")
    parrafo2.textContent = "Para analizar las burbujas ingresá 1. Para hacer mediciones con el sonar ingresá 2."
    // hablar(parrafo2.textContent)
    let btn1 = document.createElement("button")
    btn1.textContent = "1"
    btn1.classList.add("btn")
    let btn2 = document.createElement("button")
    btn2.textContent = "2"
    btn2.classList.add("btn")

    divTexto.appendChild(parrafo)
    divTexto.appendChild(parrafo2)
    divBtns.appendChild(btn1)
    divBtns.appendChild(btn2)
    formulario3.appendChild(divTexto)
    formulario3.appendChild(divBtns)

    btn1.addEventListener("click", analizarburbujas)
    btn2.addEventListener("click", medirConSonar)
}

function investigarBurbujas() {
    divFormulario.innerHTML = '<form action="" class="formulario"></form>'

    let formulario3 = document.querySelector(".formulario")

    let divTexto = document.createElement("div")
    divTexto.classList.add("divTexto")

    let divBtns = document.createElement("div")
    divBtns.classList.add("divBtns")

    let parrafo = document.createElement("p")
    parrafo.classList.add("parrafo")
    parrafo.textContent = "Piloteas el submarino a través de la entrada de la cueva. Una vez en el interior, el reflector ilumina unas estructuras parecidas a muelles y embarcaderos junto a los muros de la cueva. El reflector no es muy potente, pero llevas un láser especial con el que podrías iluminar la cueva y hacerla tan luminosa como si fuera de día. Lamentablemente la luz del láser sólo puede usarse dos veces y durante períodos muy breves, pues debe recargarse a bordo del barco, que ahora se encuentra en la superficie a más de 600 metros por encima de tu cabeza."
    // hablar(parrafo.textContent)

    let parrafo2 = document.createElement("p")
    parrafo2.classList.add("parrafo")
    parrafo2.textContent = "Para usar la luz del láser ingresá 1. Para adentrarte en la cueva ingresá 2."
    // hablar(parrafo2.textContent)

    let btn1 = document.createElement("button")
    btn1.textContent = "1"
    btn1.classList.add("btn")
    let btn2 = document.createElement("button")
    btn2.textContent = "2"
    btn2.classList.add("btn")

    divTexto.appendChild(parrafo)
    divTexto.appendChild(parrafo2)
    divBtns.appendChild(btn1)
    divBtns.appendChild(btn2)
    formulario3.appendChild(divTexto)
    formulario3.appendChild(divBtns)

    btn1.addEventListener("click", usarLuzLaser)
    btn2.addEventListener("click", adentrarteEnCueva)
}

function lucharContraCalamar () {
    
    divFormulario.innerHTML = '<form action="" class="formulario"></form>'

    let formulario3 = document.querySelector(".formulario")

    let divTexto = document.createElement("div")
    divTexto.classList.add("divTextoFinal")

    let parrafo = document.createElement("p")
    parrafo.classList.add("parrafo")
    parrafo.textContent = "Hasta aca llegamos por ahora"; 
    hablar(parrafo.textContent)

    divTexto.appendChild(parrafo)
    formulario3.appendChild(divTexto)

        mostrarFinal()
    return;
}

function subirRapido() {
    divFormulario.innerHTML = '<form action="" class="formulario"></form>'

    let formulario3 = document.querySelector(".formulario")

    let divTexto = document.createElement("div")
    divTexto.classList.add("divTextoFinal")

    let parrafo = document.createElement("p")
    parrafo.classList.add("parrafo")
    parrafo.textContent = "Hasta aca llegamos por ahora"; 
    hablar(parrafo.textContent)

    divTexto.appendChild(parrafo)
    formulario3.appendChild(divTexto)
}

function dispararCarga() {
    divFormulario.innerHTML = '<form action="" class="formulario"></form>'

    let formulario3 = document.querySelector(".formulario")

    let divTexto = document.createElement("div")
    divTexto.classList.add("divTextoFinal")

    let parrafo = document.createElement("p")
    parrafo.classList.add("parrafo")
    parrafo.textContent = "Hasta aca llegamos por ahora"; 
    hablar(parrafo.textContent)

    divTexto.appendChild(parrafo)
    formulario3.appendChild(divTexto)
}

function permanecerInmovil() {
    divFormulario.innerHTML = '<form action="" class="formulario"></form>'

    let formulario3 = document.querySelector(".formulario")

    let divTexto = document.createElement("div")
    divTexto.classList.add("divTextoFinal")

    let parrafo = document.createElement("p")
    parrafo.classList.add("parrafo")
    parrafo.textContent = "Hasta aca llegamos por ahora"; 
    hablar(parrafo.textContent)

    divTexto.appendChild(parrafo)
    formulario3.appendChild(divTexto)
}

function analizarburbujas() {
    divFormulario.innerHTML = '<form action="" class="formulario"></form>'

    let formulario3 = document.querySelector(".formulario")

    let divTexto = document.createElement("div")
    divTexto.classList.add("divTextoFinal")

    let parrafo = document.createElement("p")
    parrafo.classList.add("parrafo")
    parrafo.textContent = "Hasta aca llegamos por ahora"; 
    hablar(parrafo.textContent)

    divTexto.appendChild(parrafo)
    formulario3.appendChild(divTexto)
}

function medirConSonar() {
    divFormulario.innerHTML = '<form action="" class="formulario"></form>'

    let formulario3 = document.querySelector(".formulario")

    let divTexto = document.createElement("div")
    divTexto.classList.add("divTextoFinal")

    let parrafo = document.createElement("p")
    parrafo.classList.add("parrafo")
    parrafo.textContent = "Hasta aca llegamos por ahora";
    hablar(parrafo.textContent)  

    divTexto.appendChild(parrafo)
    formulario3.appendChild(divTexto)
}

function usarLuzLaser() {
    divFormulario.innerHTML = '<form action="" class="formulario"></form>'

    let formulario3 = document.querySelector(".formulario")

    let divTexto = document.createElement("div")
    divTexto.classList.add("divTextoFinal")

    let parrafo = document.createElement("p")
    parrafo.classList.add("parrafo")
    parrafo.textContent = "Hasta aca llegamos por ahora"; 
    hablar(parrafo.textContent)

    divTexto.appendChild(parrafo)
    formulario3.appendChild(divTexto)
}

function adentrarteEnCueva () {
    divFormulario.innerHTML = '<form action="" class="formulario"></form>'

    let formulario3 = document.querySelector(".formulario")

    let divTexto = document.createElement("div")
    divTexto.classList.add("divTextoFinal")

    let parrafo = document.createElement("p")
    parrafo.classList.add("parrafo")
    parrafo.textContent = "Hasta aca llegamos por ahora"; 
    hablar(parrafo.textContent)

    divTexto.appendChild(parrafo)
    formulario3.appendChild(divTexto)
}


function mostrarFinal(despedida){
/*     const despedida = document.createElement('p')
    despedida.textContent = despedida;
    despedida.classList.add("parrafo") */

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
}

// new Promise((resolve) => {
//     setTimeout(() => {
//         resolve({
//             title: despedida2,
//             customClass: 'sweetAlert2',
//         })
//     }, 1000)
// })



/* function mostrarFinal() {

    const final = new Date()
    const hora = final.getHours()
    
    const tituloDespedida = document.createElement("h2")

    divFormulario.appendChild(tituloDespedida)
    
    hora>6 && hora<=12 ? tituloDespedida.textContent = despedida1 : 
    hora >12 && hora <=19 ? tituloDespedida.textContent = despedida2 : tituloDespedida.textContent = despedida3
}

mostrarFinal () */