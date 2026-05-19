const verificarAccesoMedico = (req, res, next) => {

    const rolUsuario = req.headers['x-role'];

    // Validamos que exista y ser medico
    if (!rolUsuario || rolUsuario !== 'medico') {
        return res.status(403).json({
            error: "Acceso Denegado",
            mensaje: "Solo los médicos pueden acceder y modificar expedientes clínicos."
        });
    }

    next();
};

module.exports = { verificarAccesoMedico };
