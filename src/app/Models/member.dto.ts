export class MemberDTO {
  id!: number;
  nombre: string;
  direccion: string;
  codigoPostal: string;
  ciudad: string;
  telefono: string;

  constructor(
    nombre: string,
    direccion: string,
    codigoPostal: string,
    ciudad: string,
    telefono: string
  ) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.codigoPostal = codigoPostal;
    this.ciudad = ciudad;
    this.telefono = telefono;
  }
}
