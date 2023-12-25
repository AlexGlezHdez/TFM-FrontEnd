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
import { AuthorDTO } from 'src/app/Models/author.dto';
import { AuthorService } from 'src/app/Services/author.service';

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
  fechaPublicacion: UntypedFormControl;
  contenido: UntypedFormControl;
  newForm: UntypedFormGroup;

  autores?: AuthorDTO[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private newService: NewService,
    private authorService: AuthorService
  ) {
    this.idNoticia = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.titulo = new UntypedFormControl('', [Validators.required]);
    this.contenido = new UntypedFormControl('', [Validators.required]);
    this.idAutor = new UntypedFormControl('', [Validators.required]);
    this.fechaPublicacion = new UntypedFormControl('', [Validators.required]);
    this.imagen = new UntypedFormControl('', [Validators.required]);

    this.newForm = this.formBuilder.group({
      titulo: this.titulo,
      contenido: this.contenido,
      idAutor: this.idAutor,
      fechaPublicacion: this.fechaPublicacion,
      imagen: this.imagen,
    });
  }

  async ngOnInit(): Promise<void> {
    this.cargarAutores();
    if (this.idNoticia) {
      await this.newService.getNew(this.idNoticia).then((noticia) => {
        this.noticia = noticia.data;
        this.titulo.setValue(this.noticia.titulo);
        this.contenido.setValue(this.noticia.contenido);
        this.idAutor.setValue(this.noticia.autor.id);
        this.fechaPublicacion.setValue(this.noticia.fechaPublicacion);
        this.imagen.setValue(this.noticia.imagen);
      });
    } else {
      this.noticia = new NewDTO('', '', '', '');
    }
  }

  private async cargarAutores(): Promise<void> {
    await this.authorService.getAuthors().then((autores) => {
      this.autores = Object.assign([], autores.data);
      console.log(this.autores);
    });
  }

  enviarDatos(): void {
    this.noticia.titulo = this.titulo.value;
    this.noticia.contenido = this.contenido.value;
    this.noticia.autor = {
      id: this.idAutor.value,
    };
    this.noticia.fechaPublicacion = this.fechaPublicacion.value;
    this.noticia.imagen = this.imagen.value;

    // Gestionamos si se trata de una actualizacion o de una noticia nueva segun exista idNoticia
    if (this.idNoticia && !isNaN(Number(this.idNoticia))) {
      // Es una actualización
      this.noticia.id = Number(this.idNoticia.valueOf());
      console.log('Actualizando noticia...');
      console.log(JSON.stringify(this.noticia));
      this.newService.updateNew(this.noticia);
    } else {
      console.log('Creando noticia...');
      this.newService.createNew(this.noticia);
    }
  }
}
