const Utilidades = require(`./utilidades`);
const Producto = require(`./producto`);
const Usuario = require(`./usuario`);

class Carrito {
    constructor(usuario, items) {
        this.usuario = usuario;
        this.items = items;
    }

    agregar(product, cantidad) {
        if (product.hayStock(cantidad)) {
            let item = {
                producto: product,
                cantidad: cantidad
            }
            this.items.push(item);
            return "Agregando productos..."
        }
        else {
            return "No hay stock!"
        }
    }
    subtotal() {
        for (let i = 0; i < this.items.length; i++) {
            let resultado = this.items[i].producto.precio * this.items[i].cantidad;
            return resultado;
        }
    }
    total(subtotal) {
        if (this.usuario.esVIP) {
            return Utilidades.calcularDescuento(subtotal, 10)
        }
        else {
            return subtotal;

        }

    }
    recibo() {
        let listaProductos = "";
        for (const item of this.items) {
            listaProductos = listaProductos + "\n" +
                `Producto: ${item.producto.nombre}
            Cantidad: ${item.cantidad}
            Precio: ${Utilidades.formatearPrecio(item.producto.precio)}
            Total: ${this.total(this.subtotal())}`;
        }
        return `${this.usuario.saludo()}
        ${listaProductos}`;
    }
}

module.exports = Carrito;