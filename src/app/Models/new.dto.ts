import { AuthorDTO } from './author.dto';

export class NewDTO {
  id!: number;
  titulo: string;
  contenido: string;
  imagen: string;
  autor!: AuthorDTO;
  fechaPublicacion: string;

  constructor(
    titulo: string,
    contenido: string,
    imagen: string,
    fechaPublicacion: string
  ) {
    this.titulo = titulo;
    this.contenido = contenido;
    this.imagen = imagen;
    this.fechaPublicacion = fechaPublicacion;
  }
}
