/*
Retomando las APIS...

    - APIs Internas(API DOM, LocalSrorage, Drag and DROP): Son aquellas APIs que tienen por default en el navegador.

    - APIs Externas (Google Maps, FakeStore API, API PayPal, etc.): Son todas aquellas que tenemos que utilizar de proveedores externos.

    Ejemplo de la licuadora, donde la licuadora es el cliente, el enchufe es la API y el recurso que se solicita es la electricidad.

    Ventajas de las APIs:
        . Reestructurar y organizar los sistemas de forma que sean mas sencillos de usar
        - Permiten que los sistemas sean mas robustos
        - Reducen los costos de mantenimiento
        - Permitir que nuestros sistemas sean escalables

*/
/*
Sincronia

Por defecto, JS se comporta de una forma sincrona (de arriba hacia abajo, de izquierda a derecha). Utilizamos JS de una forma autobloqueante (si hay un error, lo que esta despues de ese error no se ejecuta). 

*/

//Ejemplo de una operaciom sincronica
console.log("Inicia mi operacion sincronica");

function dosSincronica(){
    console.log("Dos");
}

function unoSincronica(){
    console.log("Uno");
    dosSincronica();
    console.log("Tres");
}

unoSincronica();
console.log("Termina mi operacion sincronica");

//Los casos donde me conviene tener operaciones sincronas, son (lectura de arrays, uso de algunos metodos de arrays, condicionales, ciclos, ejecucion de funciones "normales").

/*
Asincronia

Es la capacidad que tiene JS para ejecutar funciones que no dependan de otras. Esto nos ayuda a ejecutar ciertos bloques de codigo sin tener que esperar a que termine su ejecucion, para ejecutar otras lineas de codigo. (dejar la carne en el asador mientras preparo otras cosas en el ejemplo de la carne asada).
*/

//Ejemplo de JavaScript asincronico

// console.log("Inicia mi operacion asincronica");
// function dosAsinc(){
//     console.log("Uno");
//     setTimeout(function(){ //setTime para ejecutar una funcion despues de cierto tiempo, 3 segundos en este caso
//         console.log("Dos");
//     }, 3000);
// }

// function unoAsinc(){
//     dosAsinc();
//     console.log("Tres");
// }

// unoAsinc();
// console.log("Termina mi operacion asincronica");

/*
Mecanismos para manejar la sincronia

Para controlar la sincronia en JS podemos usar algunos de estos mecanismos:

    - Callbacks: La forma mas clasica de manejar la sincronia. Se le conoce como (llamada de vuelta), basicamente es pasar una funcion como parametro de otra funcion. y se ejecutan una vez que se cumpla la condicion esperada.

    //Metodo .map() de los arrays

    - Promesas: Son objetos que van a representar un valor al momento de conectar con el servidor. Como su nombre lo indica, una promesa es algo que no sabemos si se va a cumplir o no, pero al menos necesitamos saber que hacemos si se cumple o si no se cumple. La ventaja que tienen las promesas es que no se anidan, en una sola funcion podemos manejar ambas situaciones.

    Las promesas tienen 3 estados posibles:
        - pending: estado inicial, cuando se crea la promesa. Aqui aun no hay resultados.

        - fulfilled: cuando la promesa asincrona se resuelve con exito (resolve)

        - rejected: cuando la operacion asincrona falla (reject)

    - Async/Await

*/

//Funcion especial para consumir APIS y manejar promesas

// //Instruccion de la conexion a mi servidor
// fetch ("https://fakestoreapi.com/products/1")

// //dos escenarios (obtengo una respuesta o no obtengo una respuesta)
// .then(datos => { //Cuando la promesa se resuelve ejecuta esta funcion
//     console.log(datos);
//     return datos.json(); // Convertur la respuesta

// })

// .catch(error => {
//     console.log("Error, no se encontro el producto");
//     console.log(error.message);

//     if(error.message === "Error, no se encontro el producto"){
//         console.log("Elige otro producto");
//     }
// }) 

/*
Sintaxis del fetch (con promesas)

fetch (url a consumir)
    .then (response => response.json()) //Manejo la respuesta
    .then (data => console.log(data)) //Manejo el dato


    .catch (error => console.log(error))

*/

//Asigno el fetch a una variable
const conexion = fetch("https://fakestoreapi.com/products/1");

//Imprimo la variable para ver el objeto completo
console.log("Este es mi objeto promesa: ", conexion);

conexion

// Usar el metodo then para manejar la respuesta (lo relleno con la respuesta)
.then( function (resultado){
    console.log("Dentro de esta funcion que maneja la respuesta, encontraras: ", resultado);
    return resultado.json(); //Convertir la respuesta
})

//Uso el metodo then para manejar el producto (lo relleno con la info del ptroducto)
.then(function(producto){
    console.log("Informacion del producto: ", producto);
})

//Uso el metodo catch para manejar el error (lo relleno con el error para que la caja no regrese vacia)
.catch(function(error){
    console.log("Error: ", error);
})

let respuestaServidor = "feipe de Jesus Maqueda Gonzalez, 31, 2, 1"; //texto plano

//producto como respuesta de un servidor en formato plano (texto)
let productoServidor= {"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women's clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg","rating":{"rate":3.8,"count":679}}

//producto como objeto JSON

let productoJSON =  {
    id:17,
    title:"Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price:39.99,
    description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category:"women's clothing",
    image:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating:{
        rate:3.8,
        count:679}
}

//Revissar nfomacion de un objeto con texto plano
console.log(productoServidor.price);

//Revisar informaciion de un objeto JSON
//console.log(productoJSON.price);

//Objeto JSON que voy a mandar a mi servidor
let paciente = {
    nombre : "Feipe",
    edad : 31,
    estatus : "Registrado"
}

console.log(paciente);


//Necesito convertirlo a una cadena de texto para que el servidor lo lea
let pacienteStringifeado = JSON.stringify(paciente);
console.log(pacienteStringifeado);

let pacienteServidor = '{"nombre" : "Feipe", "edad" : 31 "estatus" : "Registrado"}';

let pacienteJSON = JSON.parse(pacienteServidor);
console.log(pacienteJSON);

//Si mando un JSON al servidor, lo stringifeo
//Si recibo un string del servidor, lo parseo