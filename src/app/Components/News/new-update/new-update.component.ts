import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewDTO } from 'src/app/Models/new.dto';
import { NewService } from 'src/app/Services/new.service';

@Component({
  selector: 'app-new-update',
  templateUrl: './new-update.component.html',
  styleUrls: ['./new-update.component.scss'],
})
export class NewUpdateComponent {
  noticia!: NewDTO;

  idNoticia: string;

  titulo: UntypedFormControl;
  imagen: UntypedFormControl;
  idAutor: UntypedFormControl;
  fecha_publicacion: UntypedFormControl;
  descripcion: UntypedFormControl;
  newForm: UntypedFormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private newService: NewService
  ) {
    this.idNoticia = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.titulo = new UntypedFormControl('', [Validators.required]);
    this.descripcion = new UntypedFormControl('', [Validators.required]);
    this.idAutor = new UntypedFormControl('', [Validators.required]);
    this.fecha_publicacion = new UntypedFormControl('', [Validators.required]);
    this.imagen = new UntypedFormControl('', [Validators.required]);

    this.newForm = this.formBuilder.group({
      titulo: this.titulo,
      descripcion: this.descripcion,
      idAutor: this.idAutor,
      fecha_publicacion: this.fecha_publicacion,
      imagen: this.imagen,
    });
  }

  async ngOnInit(): Promise<void> {
    if (this.idNoticia) {
      await this.newService.getNew(this.idNoticia).then((noticia) => {
        this.noticia = noticia[0];
        this.titulo.setValue(this.noticia.titulo);
        this.descripcion.setValue(this.noticia.descripcion);
        this.idAutor.setValue(this.noticia.idAutor);
        this.fecha_publicacion.setValue(this.noticia.fecha_publicacion);
        this.imagen.setValue(this.noticia.imagen);
      });
    } else {
      this.noticia = new NewDTO('', '', '', '');
    }
  }

  enviarDatos(): void {
    this.noticia.titulo = this.titulo.value;
    this.noticia.descripcion = this.descripcion.value;
    this.noticia.idAutor = this.idAutor.value;
    this.noticia.fecha_publicacion = this.fecha_publicacion.value;
    this.noticia.imagen = this.imagen.value;

    // Gestionamos si se trata de una actualizacion o de una noticia nueva segun exista idNoticia
    if (this.idNoticia && isNaN(Number(this.idNoticia))) {
      // Es una actualización
      this.noticia.idNoticia = Number(this.idNoticia.valueOf());
      this.newService.updateNew(this.noticia);
    } else {
      this.newService.createNew(this.noticia);
    }
  }
}
