import { Component, OnInit } from '@angular/core';
import { NewDTO } from 'src/app/Models/new.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { NewService } from 'src/app/Services/new.service';

import { Location } from '@angular/common';

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
    private router: Router,
    private newService: NewService,
    private location: Location
  ) {
    this.idNoticia = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.noticia = new NewDTO('', '', '', '');
  }

  async ngOnInit(): Promise<void> {
    await this.newService.getNew(this.idNoticia).then((noticia) => {
      this.noticia = noticia[0];
    });
  }

  back(): void {
    this.location.back();
  }
}
