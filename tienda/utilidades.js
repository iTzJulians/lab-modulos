function formatearPrecio(precio) {
    return precio.toLocaleString("es-CO")
}

function emailValido(email) {
    if (email.includes("@.")) {
        return true;
    }
    return false;

}

function calcularDescuento(precio, porcentaje) {
    porcentaje /= 100;
    precio -= precio * porcentaje;
    return precio
}

module.exports = {
    formatearPrecio, emailValido, calcularDescuento
}