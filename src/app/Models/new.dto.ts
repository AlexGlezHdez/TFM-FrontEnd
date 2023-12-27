import { AuthorDTO } from './author.dto';

export class NewDTO {
  id!: number;
  titulo: string;
  contenido: string;
  imagen: string;
  autor!: AuthorDTO;
  fechaPublicacion: string;

  constructor() {
    this.titulo = '';
    this.contenido = '';
    this.imagen = '';
    this.fechaPublicacion = '';
    this.autor = new AuthorDTO();
  }
}
