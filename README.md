## Tecnología utilizada

- JavaScript
- Node.js
- Express
- API REST
- Datos en memoria

## Entidad elegida

CRUD simple de **Paciente**.

## Campos de Paciente

```json
{
  "id": 1,
  "nombre": "Juan",
  "apellido": "Pérez",
  "dni": "40111222",
  "fechaNacimiento": "2000-05-10",
  "telefono": "3411234567",
  "email": "juan.perez@email.com"
}
```

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run dev
```

El servidor se ejecuta en:

```txt
http://localhost:3000
```

## Endpoints

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/pacientes` | Lista todos los pacientes |
| GET | `/api/pacientes/:id` | Busca un paciente por ID |
| POST | `/api/pacientes` | Crea un nuevo paciente |
| PUT | `/api/pacientes/:id` | Actualiza un paciente existente |
| DELETE | `/api/pacientes/:id` | Elimina un paciente |

## Ejemplo POST

```json
{
  "nombre": "Carlos",
  "apellido": "López",
  "dni": "42123456",
  "fechaNacimiento": "2001-03-15",
  "telefono": "3415551234",
  "email": "carlos.lopez@email.com"
}
```

