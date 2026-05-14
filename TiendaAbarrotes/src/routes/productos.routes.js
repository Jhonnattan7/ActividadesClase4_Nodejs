
const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controller');

// CRUD
router.post('/', productosController.crearProducto);
router.get('/', productosController.listarProductos);
router.get('/buscar', productosController.buscarProductos);
router.get('/stock/bajo', productosController.productosStockBajo);
router.get('/:id', productosController.obtenerProducto);
router.put('/:id', productosController.actualizarProducto);
router.delete('/:id', productosController.eliminarProducto);

module.exports = router;
