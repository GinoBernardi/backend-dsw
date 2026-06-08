import express from 'express';
import cors from 'cors';
import pacienteRoutes from './routes/paciente.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    mensaje: 'API Sistema de Gestión de Historias Clínicas',
    endpoints: {
      pacientes: '/api/pacientes'
    }
  });
});

app.use('/api/pacientes', pacienteRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
