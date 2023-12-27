import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { firstValueFrom } from 'rxjs';

import { Constantes } from '../Components/Shared/constants/constants.component';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private urlApi: string;
  private urlApiBase: string;
  private authorController: string;

  constructor(private http: HttpClient) {
    this.authorController = 'v1/imagenes';
    this.urlApiBase = Constantes.urlAPI;
    this.urlApi = this.urlApiBase + this.authorController;
  }

  uploadImage(imagen: File, ruta: string) {
    const imageData = new FormData();
    imageData.append('imagen', imagen);
    imageData.append('ruta', ruta);
    return firstValueFrom(this.http.post(this.urlApi, imageData));
  }
}
