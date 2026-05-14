// Controlador de Ventas (Lógica de negocio)
// - Registrar venta (descontar stock)
// - Listar ventas del día actual
// - Detalle completo de una venta


const { Venta, ventas, nextVentaId } = require('../models/venta.model');
const { productos } = require('../models/producto.model');
let ventaIdCounter = nextVentaId;

// Registrar una venta
function registrarVenta(req, res) {
	const { productosVendidos, metodoPago } = req.body;
	if (!Array.isArray(productosVendidos) || productosVendidos.length === 0) {
		return res.status(400).json({ error: 'Debe indicar productos a vender' });
	}
	let total = 0;
	// Validar stock y calcular total
	for (const item of productosVendidos) {
		const prod = productos.find(p => p.id === item.id);
		if (!prod) return res.status(404).json({ error: `Producto id ${item.id} no encontrado` });
		if (prod.cantidad < item.cantidad) {
			return res.status(400).json({ error: `Stock insuficiente para producto ${prod.nombre}` });
		}
		total += prod.precio * item.cantidad;
	}
	// Descontar stock
	for (const item of productosVendidos) {
		const prod = productos.find(p => p.id === item.id);
		prod.cantidad -= item.cantidad;
	}
	const venta = new Venta({
		id: ventaIdCounter++,
		fecha: new Date(),
		productos: productosVendidos.map(item => ({ ...item })),
		total,
		metodoPago: metodoPago || 'efectivo'
	});
	ventas.push(venta);
	res.status(201).json(venta);
}

// Listar ventas del día actual
function listarVentasHoy(req, res) {
	const hoy = new Date();
	const ventasHoy = ventas.filter(v => {
		const fecha = new Date(v.fecha);
		return fecha.getFullYear() === hoy.getFullYear() && fecha.getMonth() === hoy.getMonth() && fecha.getDate() === hoy.getDate();
	});
	res.json(ventasHoy);
}

// Detalle de una venta por id
function detalleVenta(req, res) {
	const id = parseInt(req.params.id);
	const venta = ventas.find(v => v.id === id);
	if (!venta) return res.status(404).json({ error: 'Venta no encontrada' });
	res.json(venta);
}

module.exports = {
	registrarVenta,
	listarVentasHoy,
	detalleVenta,
	ventas // para pruebas
};
