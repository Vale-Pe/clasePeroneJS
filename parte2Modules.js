import {lucharContraCalamar, subirRapido, dispararCarga, permanecerInmovil, analizarburbujas, medirConSonar, usarLuzLaser, adentrarteEnCueva} from "./parte3Modules.js"

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

export function esconderte() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">El gigantesco calamar se revuelve y vuelca el submarino, pero al fin, se cansa del juego y se aleja. Ahora eres libre de abandonar el escondite y revisar la nave para averiguar si está averiada. Descubres que la entrada está rota. No puedes entrar. No obstante, la tripulación del barco sospechó que estabas en dificultades cuando no respondiste a un control rutinario por radio. Ahora están bajando una plataforma de salvamento. En cuanto estás en la plataforma les avisas para que empiecen a izarla lentamente hacia la superficie. Tendrán que subirte con gran lentitud, a fin de que no contraigas la enfermedad de la descompresión (la rápida expansión de burbujas de nitrógeno en la sangre). En el preciso instante en que la plataforma comienza a moverse, el calamar gigante reaparece de imprevisto, como salido de la nada. Va directamente hacia ti. <br><br>Para luchar contra el calamar elegí 1. Si elegis indicar que te suban a toda velocidad, aún sabiendo que contraerás la enfermedad de la descompresión ingresá 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", lucharContraCalamar)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", subirRapido)
}

export function escapar() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Con movimientos prudentes abandonas el submarino en las garras del gigantesco calamar. Planeas pedir ayuda dejando flotar un rotulador que llegará a la superficie y dejará en el agua un brillante manchón amarillo. Los hombres de la tripulación tienen instrucciones de estar atentos a esas señales de emergencia. En cuanto las descubran te enviarán ayuda. Cuando llegas al saliente del cañón te sientes un poco más seguro, pero en ese momento ves al más temible de los seres marinos: un tiburón. Tienes la certeza de que eres su blanco. Quizá deberías accionar la carga protectora de emergencia que te enviaría inmediatamente a la superficie. Pero el tiburón es rápido y tal vez podría agarrarte. Sabes también que en razón del rápido ascenso contraerías la enfermedad de la descompresión. <br><br>Si decides disparar la carga especial,para llegar a la superficie ingresá 1. Si resuelves permanecer inmóvil con la esperanza de que el tiburón se aleje ingresá 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", dispararCarga)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", permanecerInmovil)
}

export function investigarCueva () {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Con mucho cuidado conduces el submarino entre las paredes del cañón. Descubres en el fondo un gran hoyo del que emanan las burbujas. El submarino cuenta con un equipo científico para analizarlas. Tiene también un sonar que puede medir las profundidades de cualquier cavidad. <br><br>Para analizar las burbujas ingresá 1. Para hacer mediciones con el sonar ingresá 2. </p>'
    
    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", analizarburbujas)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", medirConSonar)
}

export function investigarBurbujas() {
    divFormulario.innerHTML = formulario

    divTexto = document.querySelector(".divTexto")
    divTexto.innerHTML = '<p class="parrafo">Piloteas el submarino a través de la entrada de la cueva. Una vez en el interior, el reflector ilumina unas estructuras parecidas a muelles y embarcaderos junto a los muros de la cueva. El reflector no es muy potente, pero llevas un láser especial con el que podrías iluminar la cueva y hacerla tan luminosa como si fuera de día. Lamentablemente la luz del láser sólo puede usarse dos veces y durante períodos muy breves, pues debe recargarse a bordo del barco, que ahora se encuentra en la superficie a más de 600 metros por encima de tu cabeza. <br><br>Para usar la luz del láser ingresá 1. Para adentrarte en la cueva ingresá 2. </p>'

    btn1 = document.querySelector(".btn1")
    btn1.addEventListener("click", usarLuzLaser)
    btn2 = document.querySelector(".btn2")
    btn2.addEventListener("click", adentrarteEnCueva)
}