export class ContactDTO {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;

  constructor() {
    this.nombre = '';
    this.email = '';
    this.asunto = '';
    this.mensaje = '';
  }
}
