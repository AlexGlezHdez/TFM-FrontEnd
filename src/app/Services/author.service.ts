import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorDTO } from '../Models/author.dto';

import { firstValueFrom } from 'rxjs';

import { Constantes } from '../Components/Shared/constants/constants.component';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private urlApi: string;
  private urlApiBase: string;
  private authorController: string;

  constructor(private http: HttpClient) {
    this.authorController = 'v1/autores';
    this.urlApiBase = Constantes.urlAPI;
    this.urlApi = this.urlApiBase + this.authorController;
  }

  getAuthors(filtroAutor?: string): Promise<any> {
    const filtro: string = filtroAutor ? '?nombre[lk]=' + filtroAutor : '';
    return firstValueFrom(this.http.get(this.urlApi + filtro));
  }

  getAutor(idAutor: string): Promise<any> {
    return firstValueFrom(this.http.get(this.urlApi + '/' + idAutor));
  }

  updateAutor(autor: AuthorDTO): Promise<any> {
    return firstValueFrom(this.http.patch(this.urlApi + '/' + autor.id, autor));
  }

  createAutor(autor: AuthorDTO): Promise<any> {
    return firstValueFrom(this.http.post(this.urlApi, autor));
  }

  deleteAutor(idAutor: number): Promise<any> {
    return firstValueFrom(this.http.delete(this.urlApi + '/' + idAutor));
  }
}
