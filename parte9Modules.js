import {iniciarLibro} from "./parte1Modules.js"
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

export function quedarte2() {
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

export function meditar() {
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

export function conservarForma() {
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

export function convertirte() {
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

export function granjero() {
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

export function musico() {
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

export function seguirlos() {
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

export function noSeguirlos() {
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