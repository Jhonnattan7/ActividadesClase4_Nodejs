const express = require('express');
const app = express();
app.use(express.json());

// Rutas
const productosRoutes = require('./src/routes/productos.routes');
const ventasRoutes = require('./src/routes/ventas.routes');

app.use('/productos', productosRoutes);
app.use('/ventas', ventasRoutes);

// Puerto fijo 3000
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Servidor escuchando en puerto ${PORT}`);
});
