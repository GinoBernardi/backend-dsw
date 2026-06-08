export const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    mensaje: error.message || 'Error interno del servidor'
  });
};
