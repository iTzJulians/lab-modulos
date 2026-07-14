const Producto = require(`./producto`);
const Usuario = require(`./usuario`);
const Carrito = require(`./carrito`);
const utilidades = require("./utilidades")

let usuario1 = new Usuario("Julian", "julian@gmail.com", true);
console.log(`Email valido: ${utilidades.emailValido(usuario1.email)}`);
let producto1 = new Producto("Audifonos", 150000, "Electronica", 15);
let producto2 = new Producto("Camisetas", 70000, "Ropa", 2);
let carrito1 = new Carrito(usuario1, []);
console.log(carrito1.agregar(producto1, 2));
console.log(carrito1.agregar(producto2, 4));
console.log(carrito1.recibo());

