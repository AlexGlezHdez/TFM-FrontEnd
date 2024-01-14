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

  constructor() {
    this.nombre = '';
    this.direccion = '';
    this.imagen = '';
    this.email = '';
    this.telefono = '';
    this.position = new LocationDTO();
    this.accesible = false;
  }
}
