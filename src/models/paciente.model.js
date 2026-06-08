export class Paciente {
  constructor({ id, nombre, apellido, dni, fechaNacimiento, telefono, email }) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.fechaNacimiento = fechaNacimiento;
    this.telefono = telefono;
    this.email = email;
  }
}
