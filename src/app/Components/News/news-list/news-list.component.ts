import { Component } from '@angular/core';
import { NewService } from 'src/app/Services/new.service';
import { NewDTO } from 'src/app/Models/new.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent {
  noticias!: NewDTO[];

  constructor(private newService: NewService, private router: Router) {
    this.cargarNoticias();
  }

  private async cargarNoticias(): Promise<void> {
    await this.newService.getNews().then((noticias) => {
      this.noticias = noticias.data;
    });
    //        .catch((error) => this.sharedService.errorLog(error.error));
  }

  leerNoticia(idNoticia: number) {
    this.router.navigateByUrl('/noticia/' + idNoticia);
  }
}
