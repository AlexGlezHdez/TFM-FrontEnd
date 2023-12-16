export class CourseDTO {
  id!: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  duracion: number;

  constructor() {
    this.titulo = '';
    this.descripcion = '';
    this.imagen = '';
    this.duracion = 0;
  }
}
