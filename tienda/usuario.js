class Usuario{
    constructor(nombre, email, esVIP){
        this.nombre = nombre;
        this.email = email;
        this.esVIP = esVIP;
    }

    saludo(){
        return  `Bienvenido ${this.nombre}!` 
    }
}

exports = Usuario;