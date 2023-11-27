import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  // Definimos un observable para controlar los cambios en el token de acceso
  public localStorageChanged$: Observable<StorageEvent> =
    fromEvent<StorageEvent>(window, 'storage');
  /*
    .pipe(
      filter((response) => response.key === 'access_token')
    );
*/

  private loggedInSource = new BehaviorSubject<string>('');
  public loggedIn$ = this.loggedInSource.asObservable();

  constructor() {
    this.loggedIn$.subscribe((status) =>
      window.localStorage.setItem('access_token', status)
    );
  }

  getLoggedIn(): Observable<string> {
    let logged = window.localStorage.getItem('access_token');
    logged = logged == null ? '' : logged;
    this.loggedInSource.next(logged);
    return this.loggedIn$;
  }

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
