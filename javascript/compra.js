class Compra {
    constructor (carritoDeCompras) {this.carrito= carritoDeCompras}
    obtenerSubtotal (){
        if (this.carrito.length >0){
            return this.carrito.reduce { (acc, nombre)=> acc + nombre.precio}
        }
    }
}