
//MODO CLARO/MODO OSCURO --> Modulos y localStorage

import {darkMode, lightMode} from "./themesModules.js"
import {iniciarLibro} from "./parte1Modules.js"

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

    divEdad.innerHTML = '<p class="parrafo fs-4">¿Cuál es tu edad?</p><label for="inputEdad"><input type="number" id="inputEdad" class="input" placeholder="Edad: "></label>'

    divNombre.innerHTML = '<p class="parrafo fs-4">Introduce tu nombre, por favor.</p><label for="inputNombre"><input type="text" id="inputNombre" class="input" placeholder="Nombre: "></label>'

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

        divFormulario.innerHTML = '<button type="button" class="btnComienzo fs-4" value="comenzar">Comenzar juego</button>'
        
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
                        <h4 class="parrafo"><p class="fs-5 mb-0">${libro.titulo}</p></h4>
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
    btnLibros.classList.add("btnLibros", "fs-6", "mb-0");
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

export function mostrarFinal(evt){ //FINAL
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