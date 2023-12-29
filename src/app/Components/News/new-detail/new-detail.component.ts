import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NewDTO } from 'src/app/Models/new.dto';
import { NewService } from 'src/app/Services/new.service';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.scss'],
})
export class NewDetailComponent implements OnInit {
  noticia: NewDTO;

  private idNoticia: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private newService: NewService,
    private location: Location,
    private toastService: ToastService
  ) {
    this.idNoticia = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.noticia = new NewDTO();
  }

  async ngOnInit(): Promise<void> {
    await this.newService
      .getNew(this.idNoticia)
      .then((noticia) => {
        this.noticia = noticia.data;
      })
      .catch(() =>
        this.toastService.mostrarMensaje(
          'Error al cargar los detalles de la noticia',
          false
        )
      );
  }

  back(): void {
    this.location.back();
  }
}
