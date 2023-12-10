import { LocationDTO } from './location.dto';

export class CenterDTO {
  id!: number;
  nombre: string;
  direccion: string;
  imagen: string;
  email: string;
  telefono: string;
  position: LocationDTO;
  accesible: boolean;

  constructor(
    nombre: string,
    direccion: string,
    imagen: string,
    email: string,
    telefono: string,
    position: LocationDTO,
    accesible: boolean
  ) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.imagen = imagen;
    this.email = email;
    this.telefono = telefono;
    this.position = position;
    this.accesible = accesible;
  }
}
