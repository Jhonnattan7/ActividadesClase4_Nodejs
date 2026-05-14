
const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventas.controller');

// Registrar venta
router.post('/', ventasController.registrarVenta);
// Listar ventas del día actual
router.get('/', ventasController.listarVentasHoy);
// Detalle de venta por id
router.get('/:id', ventasController.detalleVenta);

module.exports = router;
