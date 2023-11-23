export class CourseDTO {
  idCurso!: number;
  curso: string;
  descripcion: string;
  descripcion_extra: string;
  imagen: string;
  fecha_curso: string;

  constructor(
    curso: string,
    descripcion: string,
    descripcion_extra: string,
    imagen: string,
    fecha_curso: string
  ) {
    this.curso = curso;
    this.descripcion = descripcion;
    this.descripcion_extra = descripcion_extra;
    this.imagen = imagen;
    this.fecha_curso = fecha_curso;
  }
}
