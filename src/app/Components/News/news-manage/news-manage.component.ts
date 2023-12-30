import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NewService } from 'src/app/Services/new.service';
import { NewDTO } from 'src/app/Models/new.dto';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/Services/toast.service';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-news-manage',
  templateUrl: './news-manage.component.html',
  styleUrls: ['./news-manage.component.scss'],
})
export class NewsManageComponent implements OnInit {
  noticias!: NewDTO[];

  tituloNoticia: UntypedFormControl;

  constructor(
    private newService: NewService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.tituloNoticia = new UntypedFormControl('');

    this.cargarNoticias();
  }

  ngOnInit() {
    this.tituloNoticia.valueChanges.subscribe(() => {
      this.cargarNoticias();
    });
  }

  private async cargarNoticias(): Promise<void> {
    const filtroTitulo: string = this.tituloNoticia.value;
    await this.newService
      .getNews(filtroTitulo)
      .then((noticias) => {
        this.noticias = Object.assign([], noticias.data);
      })
      .catch((resp) => {
        this.toastService.mostrarMensaje('Error al cargar las noticias', false);
      });
  }

  leerNoticia(idNoticia: number) {
    this.router.navigateByUrl('/noticia/' + idNoticia);
  }

  actualizarNoticia = (idNoticia: number): void => {
    this.router.navigateByUrl('/admin/noticia/' + idNoticia);
  };

  borrarNoticia = async (idNoticia: number): Promise<void> => {
    await this.newService
      .deleteNew(idNoticia)
      .then(() => {
        this.cargarNoticias();
        this.toastService.mostrarMensaje('Noticia borrada correctamente', true);
      })
      .catch((resp) => {
        this.toastService.mostrarMensaje('Error al borrar la noticia', false);
      });
  };
}
