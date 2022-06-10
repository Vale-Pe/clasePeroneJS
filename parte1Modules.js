import {esconderte, escapar, investigarCueva, investigarBurbujas} from "./parte2Modules.js"

const divFormulario = document.querySelector(".divFormulario")

let divTexto
let divBtns

let btn1
let btn2

let formulario = `
<form action="" class="formulario">
    <div class="divTexto">
    </div>
    <div class="divBtns">
        <button class="btn btn1 fs-4">1</button>
        <button class="btn btn2 fs-4">2</button>
    </div>
</form>`

export function iniciarLibro() {

    // divFormulario.innerHTML = '<img class="imgFondo" src="Img/barco.jpg" alt="">'
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Eres explorador submarino. En este momento zarpas con el propósito de explorar las aguas más profundas. Tienes que encontrar la ciudad perdida de Atlántida: la misión más apasionante que te han encomendado. Subís con tu equipo y tu traje especial a tu nave submarina. Comienza el descenso a las profundidades del oceano, con la ayuda de un cable delgado aunque resistente. La nave llega a una saliente cercana al lecho del océano. Si decides, puedes salir a explorar el saliente. Sino, puedes soltar el cable y explorar el lecho con el submarino. <br><br>Si decides explorar el saliente presioná 1. Si decides explorar con el submarino presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", salirDelSubmarino)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", soltarCable)
}

export function salirDelSubmarino () {
    // divFormulario.innerHTML = '<img class="imgFondo" src="Img/calamar.jpg" alt="">'
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Tu traje de inmersión te protegerá de las intensas presiones de las profundidades. Sales del submarino maravillado por el mundo extraño que encuentras. Comienzas a explorar con ayuda de tu reflector de mano. De pronto pasa a tu lado un cardumen a gran velocidad. Giras para ver de que se trata y descubres que la nave está en poder de un enorme monstruo submarino. Sabes que tu traje no te protejerá contra semejante monstruo. <br><br>Si decides esconderte presioná 1. Si decides escapar presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", esconderte)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", escapar)
}

export function soltarCable () {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo fs-4">Indicas por radio la situación. Avisas que soltarás el cable. Dan su aprovación. Enciendes el reflector de la nave. A la izquierda visualizas una cueva. A la derecha observas como ascienen constantemente burbujas desde el fondo del cañón. <br><br>Para investigar la cueva presioná 1. Para investigar las burbujas presioná 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", investigarCueva)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", investigarBurbujas)
}