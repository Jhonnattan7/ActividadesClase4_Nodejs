// Modelo de Producto (Datos y lógica de acceso a datos)
// id, nombre, categoría, precio, cantidad en stock, unidad de medida, fecha de vencimiento, proveedor

class Producto {
	constructor({ id, nombre, categoria, precio, cantidad, unidad, vencimiento, proveedor }) {
		this.id = id;
		this.nombre = nombre;
		this.categoria = categoria;
		this.precio = precio;
		this.cantidad = cantidad;
		this.unidad = unidad;
		this.vencimiento = vencimiento || null;
		this.proveedor = proveedor || null;
	}
}

// Almacenamiento en memoria (puedes cambiar a BD real luego)
const productos = [];
let nextId = 1;

module.exports = {
	Producto,
	productos,
	nextId
};
