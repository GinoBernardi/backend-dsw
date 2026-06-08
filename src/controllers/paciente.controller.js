import {
  obtenerPacientes,
  obtenerPacientePorId,
  crearPaciente,
  actualizarPaciente,
  eliminarPaciente
} from '../services/paciente.service.js';

export const listarPacientes = (req, res, next) => {
  try {
    const pacientes = obtenerPacientes();
    res.json(pacientes);
  } catch (error) {
    next(error);
  }
};

export const buscarPacientePorId = (req, res, next) => {
  try {
    const paciente = obtenerPacientePorId(req.params.id);

    if (!paciente) {
      return res.status(404).json({ mensaje: 'Paciente no encontrado' });
    }

    res.json(paciente);
  } catch (error) {
    next(error);
  }
};

export const registrarPaciente = (req, res, next) => {
  try {
    const nuevoPaciente = crearPaciente(req.body);
    res.status(201).json({
      mensaje: 'Paciente creado correctamente',
      paciente: nuevoPaciente
    });
  } catch (error) {
    next(error);
  }
};

export const modificarPaciente = (req, res, next) => {
  try {
    const pacienteActualizado = actualizarPaciente(req.params.id, req.body);
    res.json({
      mensaje: 'Paciente actualizado correctamente',
      paciente: pacienteActualizado
    });
  } catch (error) {
    next(error);
  }
};

export const borrarPaciente = (req, res, next) => {
  try {
    const pacienteEliminado = eliminarPaciente(req.params.id);
    res.json({
      mensaje: 'Paciente eliminado correctamente',
      paciente: pacienteEliminado
    });
  } catch (error) {
    next(error);
  }
};
