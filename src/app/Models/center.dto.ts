import { LocationDTO } from './location.dto';

export class CenterDTO {
  idCentro!: number;
  centro: string;
  direccion: string;
  imagen: string;
  email: string;
  telefono: string;
  position: LocationDTO;
  esAccesible: boolean;

  constructor(
    centro: string,
    direccion: string,
    imagen: string,
    email: string,
    telefono: string,
    position: LocationDTO,
    esAccesible: boolean
  ) {
    this.centro = centro;
    this.direccion = direccion;
    this.imagen = imagen;
    this.email = email;
    this.telefono = telefono;
    this.position = position;
    this.esAccesible = esAccesible;
  }
}
