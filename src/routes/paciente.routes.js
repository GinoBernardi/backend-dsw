import { Router } from 'express';
import {
  listarPacientes,
  buscarPacientePorId,
  registrarPaciente,
  modificarPaciente,
  borrarPaciente
} from '../controllers/paciente.controller.js';
import { validarPaciente } from '../middlewares/validarPaciente.js';

const router = Router();

router.get('/', listarPacientes);
router.get('/:id', buscarPacientePorId);
router.post('/', validarPaciente, registrarPaciente);
router.put('/:id', validarPaciente, modificarPaciente);
router.delete('/:id', borrarPaciente);

export default router;
