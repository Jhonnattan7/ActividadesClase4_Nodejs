const medicos = [
    {
        id: 1,
        nombre: "Dr. Alejandro Durón",
        especialidad: "Cardiología",
        departamento: "Cardiovasculares",
        horarioAtencion: [
            { dia: "Lunes", horaInicio: "08:00", horaFin: "12:00" },
            { dia: "Miércoles", horaInicio: "08:00", horaFin: "12:00" }
        ],
        estado: "activo" 
    },
    {
        id: 2,
        nombre: "Dra. Reina Sosa",
        especialidad: "Pediatría",
        departamento: "Infantil",
        horarioAtencion: [
            { dia: "Martes", horaInicio: "13:00", horaFin: "17:00" },
            { dia: "Jueves", horaInicio: "13:00", horaFin: "17:00" }
        ],
        estado: "guardia"
    },
    {
        id: 3,
        nombre: "Dr. Jhonnatan Peñate",
        especialidad: "Neurología",
        departamento: "Neurología",
        horarioAtencion: [
            { dia: "Viernes", horaInicio: "09:00", horaFin: "15:00" }
        ],
        estado: "fuera de servicio"
    }
];

module.exports = {
    medicos
};
