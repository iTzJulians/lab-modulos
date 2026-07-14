class Producto {
    constructor(nombre, precio, categoria, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }
    hayStock(cantidad) {
        if (this.stock >= cantidad) {
            return true;
        }
        return false;
    }
    ficha(){
        return `
        ========PRODUCTO=========
        Nombre: ${this.nombre}
        Precio: ${this.precio} COP
        Categoria ${this.categoria}
        Stock: ${this.stock}
        `
    }
}

module.exports = Producto;