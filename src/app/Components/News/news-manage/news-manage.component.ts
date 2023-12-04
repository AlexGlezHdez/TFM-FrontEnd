import { Component } from '@angular/core';
import { NewService } from 'src/app/Services/new.service';
import { NewDTO } from 'src/app/Models/new.dto';
import { Router } from '@angular/router';

import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-news-manage',
  templateUrl: './news-manage.component.html',
  styleUrls: ['./news-manage.component.scss'],
})
export class NewsManageComponent {
  noticias!: NewDTO[];

  tituloNoticia: UntypedFormControl;

  constructor(private newService: NewService, private router: Router) {
    this.tituloNoticia = new UntypedFormControl('');

    this.cargarNoticias();
  }

  private async cargarNoticias(): Promise<void> {
    await this.newService.getNews().then((noticias) => {
      this.noticias = noticias;
    });
    //        .catch((error) => this.sharedService.errorLog(error.error));
  }

  leerNoticia(idNoticia: number) {
    this.router.navigateByUrl('/noticia/' + idNoticia);
  }

  actualizarNoticia = (idNoticia: number): void => {
    this.router.navigateByUrl('/admin/noticia/' + idNoticia);
  };

  borrarNoticia = (idNoticia: number): void => {
    // Acción de eliminar una noticia
    this.router.navigateByUrl('/admin/noticia/' + idNoticia);
  };
}
