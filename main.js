/* Ejercicio 2: Sistema de Gestión de una Tienda en
/* Línea
Crea una aplicación para gestionar una tienda en línea utilizando clases en JavaScript. Debes crear las
siguientes clases:
● Producto
● CarritoDeCompra
● Cliente.



Clase Producto
PROPIEDADES:
● nombre: Nombre del producto
● precio: Precio del producto
● stock; Cantidad disponible en el inventario
MÉTODOS:
● mostrarInformacion(): Muestra la información completa del producto en consola



Clase CarritoDeCompras
PROPIEDADES
● productos: Un array para almacenar objetos de productos seleccionados por el cliente
MÉTODOS
● agregarProducto(producto, cantidad): Agrega un objeto Producto al carrito con la cantidad
especificada
● removerProducto(producto): Remueve un objeto Producto del carrito.
● calcularTotal(): Calcula el total de la compra, considerando los productos y sus cantidades en
el carrito
● mostrarCarrito(): Muestra en consola el contenido actual del carrito con detalles de los
productos y cantidades 



Clase Cliente
PROPIEDADES
● nombre: Nombre del cliente
● dirección: Dirección donde se enviarán los productos
● carrito: Un objeto de tipo CarritoDeCompras para almacenar los productos que el cliente desea
comprar
MÉTODOS
● realizarCompra(): Simula la acción de realizar una compra, mostrando un mensaje de
confirmación con los detalles de la compra y vaciando el carrito de compras
*/ 

// Ejemplo de uso:
const producto1 = new Producto ("Smartphone", 500, 10);
const producto2 = new Producto ("Laptop", 1000, 5);

const carrito = new CarritoDeCompras();

carrito.agregarProducto(producto1, 2);
carrito.agregarProducto(producto2, 1);


carrito.mostrarCarrito();

console.log("Total de la compra: $" + carrito.calcularTotal());

const cliente1 = new Cliente("Juan Pérez", "123 Main St", carrito);

console.log("Cliente: " + cliente1.nombre);
console.log("Dirección de envío: " + cliente1.direccion);

cliente1.realizarCompra();


