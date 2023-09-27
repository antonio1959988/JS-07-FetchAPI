/*
API de almacenamiento web

Nos permite almacenar informacion en nuestro navegador, de dos formas:

    - Local(persistencia de los datos)
    - session (los datos son volatiles)

Tanto el almacenamiento local como el de sesion, proporcionan un area privada para tratar sus datos, esto quiere decir que otros sitios web no pueden acceder a los datos que almacenamos.


// Almacenamiento local (localStorage) <-- Normalmente almacena arreglo de objetos

La informacion que pongamos en un almacenamiento local se guarda indefinidiamente hasta que sea eliminada por codigo o borrada del navegador.

Casos de uso: articulos de un carrito de compras, guardamos un perfil de configuracion, historial de uso.

*/

//Guardando mi primer dato en localStorage
//LocalStorage.setItem(key, value);

localStorage.setItem("Nombre", "Felipe");
localStorage.setItem("Apellido", "Maqueda");
localStorage.setItem("Edad", 31);

//Guardadndo un carrito de compras
let carritoComprasFelipe = ["Sabritones", "Coca Cola", "Chicles", "Tortillas"];

localStorage.setItem("carritoCompras", carritoComprasFelipe);

//Obtener la informacion almacenada en mi localStorage

//localStorage.getItem(key);
let Apellido = localStorage.getItem("Apellido");
console.log(Apellido);

//Recuperando el carrito de compras
let carrito = localStorage.getItem("carritoCompras");
console.log(carrito);

//Borrar un elemento de localStorage
//LocalStorage.removeItem(key);
localStorage.removeItem("carritoCompras");


//Obtener la informacion almacenada en mi SessionStorage

//SessionStorge.getItem(key);
//et Nombre = sessionStorage.getItem("Nombre");

//Recuperando el carrito de compras
//let carrito2 = sessionStorage.getItem("carritoCompras");

//Conocer el largo o longitud del LocalStorage
//LocalStorage.length;

let longitudLocalStorage = localStorage.length;
console.log(longitudLocalStorage);

//Para modificar datos con set
localStorage.setItem("Apellido", "Gonzalez");