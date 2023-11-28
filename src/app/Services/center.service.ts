import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CenterDTO } from '../Models/center.dto';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CenterService {
  private urlApi: string;
  private controller: string;

  private mockupNewsDataFile: string = '/assets/centers-data.json';

  constructor(private http: HttpClient) {
    this.controller = 'posts';
    this.urlApi = 'http://localhost:3000/' + this.controller;
  }

  getCenters(): Promise<CenterDTO[]> {
    return firstValueFrom(this.http.get<CenterDTO[]>(this.mockupNewsDataFile));
  }

  getCenter(idCenter: string): Promise<CenterDTO[]> {
    return firstValueFrom(this.http.get<CenterDTO[]>(this.mockupNewsDataFile));
  }
}
