class CarritoDeCompras {
    //PROPIEDADES
    constructor() {
        this.productos = [];//Un array para almacenar objetos de productos seleccionados por el cliente;
    } 
    
    //METODOS
    agregarProducto(producto, cantidad){
        // Agrega un objeto Producto al carrito con la cantidad especificada
        if(producto.stock >= cantidad){
            this.productos.push({producto,cantidad})
            console.log(`Se agregaron ${cantidad} ${producto.nombre} al carrito`);
        }else{
            console.log(`No hay suficiente stock de ${producto.nombre}`);
        }
    }


    removerProducto(producto){// Remueve un objeto Producto del carrito.
        const index = this.productos.indexOf(producto)
        if (index == -1) {
            console.log(`${producto.nombre} no está en el carrito.`);
        } else {
            producto.stock += this.productos[index].cantidad;
            this.productos.splice(index, 1);
            console.log(`${producto.nombre} eliminado del carrito.`);
        }
    } 
    calcularTotal(){
        let total = 0;
        for(let i = 0; i < this.productos.length; i++){
            total += this.productos[i].producto.precio * this.productos[i].cantidad;
        }
        
        return total
    } /* Calcula el total de la compra, considerando los productos y sus cantidades en
el carrito */
    mostrarCarrito(){
        console.log("Carrito:");
        this.productos.forEach((item) => {
        console.log(
            `Cantidad: ${item.cantidad} Producto: ${item.producto.nombre} Precio: ${item.producto.precio} c/u`
        );
        });
        

    } /* Muestra en consola el contenido actual del carrito con detalles de los
productos y cantidades */


}
