// Controlador de Productos (Lógica de negocio)
// - CRUD completo
// - Buscar por nombre o categoría
// - Filtrar stock bajo (< 5)


const { Producto, productos, nextId } = require('../models/producto.model');
let idCounter = nextId;

// Crear producto
function crearProducto(req, res) {
	const { nombre, categoria, precio, cantidad, unidad, vencimiento, proveedor } = req.body;
	if (!nombre || !categoria || !precio || !cantidad || !unidad) {
		return res.status(400).json({ error: 'Faltan campos obligatorios' });
	}
	const producto = new Producto({
		id: idCounter++,
		nombre,
		categoria,
		precio,
		cantidad,
		unidad,
		vencimiento: vencimiento || null,
		proveedor: proveedor || null
	});
	productos.push(producto);
	res.status(201).json(producto);
}

// Listar todos los productos
function listarProductos(req, res) {
	res.json(productos);
}

// Obtener producto por id
function obtenerProducto(req, res) {
	const id = parseInt(req.params.id);
	const producto = productos.find(p => p.id === id);
	if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
	res.json(producto);
}

// Actualizar producto
function actualizarProducto(req, res) {
	const id = parseInt(req.params.id);
	const producto = productos.find(p => p.id === id);
	if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
	const { nombre, categoria, precio, cantidad, unidad, vencimiento, proveedor } = req.body;
	if (nombre) producto.nombre = nombre;
	if (categoria) producto.categoria = categoria;
	if (precio) producto.precio = precio;
	if (cantidad) producto.cantidad = cantidad;
	if (unidad) producto.unidad = unidad;
	if (vencimiento) producto.vencimiento = vencimiento;
	if (proveedor) producto.proveedor = proveedor;
	res.json(producto);
}

// Eliminar producto
function eliminarProducto(req, res) {
	const id = parseInt(req.params.id);
	const idx = productos.findIndex(p => p.id === id);
	if (idx === -1) return res.status(404).json({ error: 'Producto no encontrado' });
	productos.splice(idx, 1);
	res.status(204).send();
}

// Buscar productos por nombre o categoría
function buscarProductos(req, res) {
	const { nombre, categoria } = req.query;
	let resultado = productos;
	if (nombre) resultado = resultado.filter(p => p.nombre.toLowerCase().includes(nombre.toLowerCase()));
	if (categoria) resultado = resultado.filter(p => p.categoria.toLowerCase().includes(categoria.toLowerCase()));
	res.json(resultado);
}

// Filtrar productos con stock bajo (<5)
function productosStockBajo(req, res) {
	const bajos = productos.filter(p => p.cantidad < 5);
	res.json(bajos);
}

module.exports = {
	crearProducto,
	listarProductos,
	obtenerProducto,
	actualizarProducto,
	eliminarProducto,
	buscarProductos,
	productosStockBajo
};
