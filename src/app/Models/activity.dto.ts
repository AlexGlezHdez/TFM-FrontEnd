export class ActivityDTO {
  id!: number;
  titulo: string;
  descripcion: string;
  imagen: string;

  constructor() {
    this.titulo = '';
    this.descripcion = '';
    this.imagen = '';
  }
}
