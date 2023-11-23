export class NewDTO {
  idNoticia!: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  idAutor!: number;
  nombreAutor!: string;
  fecha_publicacion: string;

  constructor(
    titulo: string,
    descripcion: string,
    imagen: string,
    fecha_publicacion: string
  ) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.fecha_publicacion = fecha_publicacion;
  }
}
