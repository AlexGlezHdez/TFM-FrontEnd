import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewDTO } from '../Models/new.dto';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewService {
  private urlApi: string;
  private controller: string;

  private mockupNewsDataFile: string = '/assets/news-data.json';

  constructor(private http: HttpClient) {
    this.controller = 'posts';
    this.urlApi = 'http://localhost:3000/' + this.controller;
  }

  getNews(): Promise<NewDTO[]> {
    return firstValueFrom(this.http.get<NewDTO[]>(this.mockupNewsDataFile));
  }

  getNew(idNoticia: string): Promise<NewDTO[]> {
    return firstValueFrom(this.http.get<NewDTO[]>(this.mockupNewsDataFile));
  }
}
