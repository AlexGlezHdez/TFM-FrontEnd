import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactDTO } from '../Models/contact.dto';
import { Observable, throwError, of } from 'rxjs';
import { catchError, firstValueFrom } from 'rxjs';

import { Constantes } from '../Components/Shared/constants/constants.component';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private urlApi: string;
  private urlApiBase: string;
  private authorController: string;

  constructor(private http: HttpClient) {
    this.authorController = 'v1/contacto';
    this.urlApiBase = Constantes.urlAPI;
    this.urlApi = this.urlApiBase + this.authorController;
  }

  enviarMensaje(contacto: ContactDTO): Promise<any> {
    return firstValueFrom(
      this.http
        .post(this.urlApi, contacto, {
          observe: 'response',
          responseType: 'text',
        })
        .pipe(
          catchError((error: any, caught: Observable<any>): Observable<any> => {
            throwError(() => new Error(error));

            // after handling error, return a new observable
            // that doesn't emit any values and completes
            return of();
          })
        )
    );
  }
}
