class Cliente {
    //PROPIEDADES
    constructor(nombre, direccion, carrito){
        this.nombre = nombre;/* nombre del cliente */
        this.direccion = direccion;/* Dirección donde se enviarán los productos */
        this.carrito = carrito/* Un objeto de tipo CarritoDeCompras para almacenar los productos que el cliente desea comprar */
    }
    //METODOS
    realizarCompra(){
        console.log(`La compra se realizo con éxito. Detalles: 
            compra realizada por ${this.nombre}
            dirección de envio ${this.direccion}
            total a pagar ${this.carrito.calcularTotal()}`)
            
        //Simula la acción de realizar una compra, mostrando un mensaje de
//confirmación con los detalles de la compra y vaciando el carrito de compras
    
        }
        vaciarCarrito() {
                this.productos = [];
                console.log("El carrito ha sido vaciado.");
            } //Vacia el carrito 
}




