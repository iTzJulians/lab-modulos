import Producto from "./producto.js"
import Usuario from "./usuario.js"
import Carrito from "./carrito.js"
import {emailValido} from "./utilidades.js"

let usuario1 = new Usuario("Julian", "julian@gmail.com", true);
console.log(`Email valido: ${emailValido(usuario1.email)}`);
let producto1 = new Producto("Audifonos", 150000, "Electronica", 15);
let producto2 = new Producto("Camisetas", 70000, "Ropa", 2);
let carrito1 = new Carrito(usuario1, []);
console.log(carrito1.agregar(producto1, 2));
console.log(carrito1.agregar(producto2, 4));
console.log(carrito1.recibo());

