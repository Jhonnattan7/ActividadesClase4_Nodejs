// Modelo de Venta (Datos y lógica de acceso a datos)
// id, fecha y hora, lista de productos, total, método de pago

class Venta {
	constructor({ id, fecha, productos, total, metodoPago }) {
		this.id = id;
		this.fecha = fecha;
		this.productos = productos; // [{id, cantidad, precio}]
		this.total = total;
		this.metodoPago = metodoPago;
	}
}

// Almacenamiento en memoria (puedes cambiar a BD real luego)
const ventas = [];
let nextVentaId = 1;

module.exports = {
	Venta,
	ventas,
	nextVentaId
};
