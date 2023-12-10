import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewDTO } from '../Models/new.dto';

import { firstValueFrom } from 'rxjs';

interface NoticiaAPI {
  id?: number;
  tituloEntrada: string;
  imagen: string;
  fechaPublicacion: string;
  contenido: string;
  idAutor: number;
}

@Injectable({
  providedIn: 'root',
})
export class NewService {
  private urlApiBase: string;
  private urlApi: string;
  private newsController: string;

  private mockupNewsDataFile: string = '/assets/news-data.json';

  constructor(private http: HttpClient) {
    this.newsController = 'noticias';
    this.urlApiBase = 'http://localhost:8000/api/v1/';
    this.urlApi = this.urlApiBase + this.newsController;
  }

  getNews(): Promise<any> {
    return firstValueFrom(this.http.get(this.urlApi));
  }

  getNew(idNoticia: string): Promise<any> {
    return firstValueFrom(this.http.get(this.urlApi + '/' + idNoticia));
  }

  updateNew(noticia: NewDTO): Promise<any> {
    const noticiaAPI: NoticiaAPI = {
      id: noticia.id,
      tituloEntrada: noticia.titulo,
      contenido: noticia.contenido,
      fechaPublicacion: noticia.fechaPublicacion,
      idAutor: noticia.autor.id,
      imagen: noticia.imagen,
    };

    return firstValueFrom(
      this.http.patch(this.urlApi + '/' + noticia.id, noticiaAPI)
    );
  }

  createNew(noticia: NewDTO): Promise<any> {
    const noticiaAPI: NoticiaAPI = {
      tituloEntrada: noticia.titulo,
      contenido: noticia.contenido,
      fechaPublicacion: noticia.fechaPublicacion,
      idAutor: noticia.autor.id,
      imagen: noticia.imagen,
    };
    console.log(noticiaAPI);

    return firstValueFrom(this.http.post(this.urlApi, noticiaAPI));
  }

  deleteNew(idNoticia: number): Promise<any> {
    return firstValueFrom(this.http.delete(this.urlApi + '/' + idNoticia));
  }
}
