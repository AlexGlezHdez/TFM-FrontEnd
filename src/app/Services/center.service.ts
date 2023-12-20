import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CenterDTO } from '../Models/center.dto';

import { firstValueFrom } from 'rxjs';

import { Constantes } from '../Components/Shared/constants/constants.component';

interface CenterAPI {
  id?: number;
  nombre: string;
  direccion: string;
  accesible: boolean;
  latitud: number;
  longitud: number;
}

@Injectable({
  providedIn: 'root',
})
export class CenterService {
  private urlApiBase: string;
  private urlApi: string;
  private centersController: string;

  private mockupNewsDataFile: string = '/assets/centers-data.json';

  constructor(private http: HttpClient) {
    this.centersController = 'v1/centros';
    this.urlApiBase = Constantes.urlAPI;
    this.urlApi = this.urlApiBase + this.centersController;
  }

  getCenters(): Promise<any> {
    return firstValueFrom(this.http.get(this.urlApi));
  }

  getCenter(idCenter: string): Promise<any> {
    return firstValueFrom(this.http.get(this.urlApi + '/' + idCenter));
  }

  updateCenter(centro: CenterDTO): Promise<any> {
    const centroAPI: CenterAPI = {
      nombre: centro.nombre,
      direccion: centro.direccion,
      accesible: centro.accesible,
      latitud: centro.position.lat,
      longitud: centro.position.lng,
    };

    return firstValueFrom(
      this.http.patch(this.urlApi + '/' + centro.id, centroAPI)
    );
  }

  createCenter(centro: CenterDTO): Promise<any> {
    const centroAPI: CenterAPI = {
      nombre: centro.nombre,
      direccion: centro.direccion,
      accesible: centro.accesible,
      latitud: centro.position.lat,
      longitud: centro.position.lng,
    };
    console.log(centroAPI);

    return firstValueFrom(this.http.post(this.urlApi, centroAPI));
  }

  deleteCenter(idCentro: number): Promise<any> {
    return firstValueFrom(this.http.delete(this.urlApi + '/' + idCentro));
  }
}
