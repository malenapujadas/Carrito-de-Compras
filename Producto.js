class Producto {
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    
    mostrarInformacion(){
        // Muestra la información completa del producto en consola
        console.log(`Nombre del producto: ${this.nombre}, precio: ${this.precio}, stock: ${this.stock}`);
        
    }
}



