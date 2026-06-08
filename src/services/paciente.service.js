import { Paciente } from '../models/paciente.model.js';

let pacientes = [
  new Paciente({
    id: 1,
    nombre: 'Juan',
    apellido: 'Pérez',
    dni: '40111222',
    fechaNacimiento: '2000-05-10',
    telefono: '3411234567',
    email: 'juan.perez@email.com'
  }),
  new Paciente({
    id: 2,
    nombre: 'María',
    apellido: 'Gómez',
    dni: '38555666',
    fechaNacimiento: '1998-09-20',
    telefono: '3417654321',
    email: 'maria.gomez@email.com'
  })
];

let ultimoId = 2;

export const obtenerPacientes = () => {
  return pacientes;
};

export const obtenerPacientePorId = (id) => {
  return pacientes.find((paciente) => paciente.id === Number(id));
};

export const crearPaciente = (datosPaciente) => {
  const dniExistente = pacientes.some((paciente) => paciente.dni === datosPaciente.dni);

  if (dniExistente) {
    const error = new Error('Ya existe un paciente con ese DNI');
    error.statusCode = 400;
    throw error;
  }

  const nuevoPaciente = new Paciente({
    id: ++ultimoId,
    ...datosPaciente
  });

  pacientes.push(nuevoPaciente);
  return nuevoPaciente;
};

export const actualizarPaciente = (id, datosPaciente) => {
  const paciente = obtenerPacientePorId(id);

  if (!paciente) {
    const error = new Error('Paciente no encontrado');
    error.statusCode = 404;
    throw error;
  }

  const dniExistente = pacientes.some(
    (p) => p.dni === datosPaciente.dni && p.id !== Number(id)
  );

  if (dniExistente) {
    const error = new Error('Ya existe otro paciente con ese DNI');
    error.statusCode = 400;
    throw error;
  }

  paciente.nombre = datosPaciente.nombre;
  paciente.apellido = datosPaciente.apellido;
  paciente.dni = datosPaciente.dni;
  paciente.fechaNacimiento = datosPaciente.fechaNacimiento;
  paciente.telefono = datosPaciente.telefono;
  paciente.email = datosPaciente.email;

  return paciente;
};

export const eliminarPaciente = (id) => {
  const paciente = obtenerPacientePorId(id);

  if (!paciente) {
    const error = new Error('Paciente no encontrado');
    error.statusCode = 404;
    throw error;
  }

  pacientes = pacientes.filter((p) => p.id !== Number(id));
  return paciente;
};
