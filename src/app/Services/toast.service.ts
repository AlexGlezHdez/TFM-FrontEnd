import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor() {}

  async mostrarMensaje(mensaje: string, valido: boolean): Promise<void> {
    const ventanaAviso = document.getElementById('ventanaAviso');

    if (ventanaAviso) {
      if (valido) {
        ventanaAviso.className = 'show';
        ventanaAviso.textContent = mensaje;
      } else {
        ventanaAviso.className = 'show error';
        ventanaAviso.textContent = mensaje;
      }

      await this.wait(2500);
      ventanaAviso.className = '';
      ventanaAviso.textContent = '';
    }
  }

  async wait(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}
