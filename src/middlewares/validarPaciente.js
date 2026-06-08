export const validarPaciente = (req, res, next) => {
  const { nombre, apellido, dni, fechaNacimiento, telefono, email } = req.body;

  if (!nombre || !apellido || !dni || !fechaNacimiento || !telefono || !email) {
    return res.status(400).json({
      mensaje: 'Todos los campos son obligatorios: nombre, apellido, dni, fechaNacimiento, telefono, email'
    });
  }

  if (typeof nombre !== 'string' || nombre.trim().length < 2) {
    return res.status(400).json({ mensaje: 'El nombre debe tener al menos 2 caracteres' });
  }

  if (typeof apellido !== 'string' || apellido.trim().length < 2) {
    return res.status(400).json({ mensaje: 'El apellido debe tener al menos 2 caracteres' });
  }

  if (!/^\d{7,8}$/.test(dni)) {
    return res.status(400).json({ mensaje: 'El DNI debe contener 7 u 8 números' });
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaNacimiento)) {
    return res.status(400).json({ mensaje: 'La fecha de nacimiento debe tener formato YYYY-MM-DD' });
  }

  if (!/^\d{7,15}$/.test(telefono)) {
    return res.status(400).json({ mensaje: 'El teléfono debe contener entre 7 y 15 números' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ mensaje: 'El email no tiene un formato válido' });
  }

  next();
};
