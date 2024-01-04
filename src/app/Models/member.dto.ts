export class MemberDTO {
  id!: number;
  nombre: string;
  direccion: string;
  codigoPostal: string;
  ciudad: string;
  telefono: string;
  email: string;
  admin: boolean;

  constructor() {
    this.nombre = '';
    this.direccion = '';
    this.codigoPostal = '';
    this.ciudad = '';
    this.telefono = '';
    this.email = '';
    this.admin = false;
  }
}
