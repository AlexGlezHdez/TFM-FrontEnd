import { OnInit } from '@angular/core';
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
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-new-update',
  templateUrl: './new-update.component.html',
  styleUrls: ['./new-update.component.scss'],
})
export class NewUpdateComponent implements OnInit {
  noticia!: NewDTO;

  idNoticia: string;

  titulo: UntypedFormControl;
  imagen: UntypedFormControl;
  idAutor: UntypedFormControl;
  fechaPublicacion: UntypedFormControl;
  contenido: UntypedFormControl;
  newForm: UntypedFormGroup;

  autores?: AuthorDTO[];

  // Variable donde almacenar la posible imagen
  ficheroImagen?: File;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private newService: NewService,
    private toastService: ToastService,
    private authorService: AuthorService
  ) {
    this.idNoticia = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.titulo = new UntypedFormControl('', [Validators.required]);
    this.contenido = new UntypedFormControl('', [Validators.required]);
    this.idAutor = new UntypedFormControl(null, [Validators.required]);
    this.fechaPublicacion = new UntypedFormControl('', [Validators.required]);
    this.imagen = new UntypedFormControl(null, [Validators.required]);

    this.newForm = this.formBuilder.group({
      titulo: this.titulo,
      contenido: this.contenido,
      idAutor: this.idAutor,
      fechaPublicacion: this.fechaPublicacion,
      imagen: this.imagen,
    });

    this.noticia = new NewDTO();
  }

  async ngOnInit(): Promise<void> {
    await this.cargarAutores().then(() => {
      if (this.idNoticia) {
        this.newService.getNew(this.idNoticia).then((noticia) => {
          this.noticia = noticia.data;
          this.titulo.setValue(this.noticia.titulo);
          this.contenido.setValue(this.noticia.contenido);
          this.idAutor.setValue(this.noticia.autor.id);
          this.fechaPublicacion.setValue(
            this.noticia.fechaPublicacion.substring(0, 10)
          );
          //        this.imagen.setValue(this.noticia.imagen);
        });
      }
    });
  }

  private async cargarAutores(): Promise<void> {
    await this.authorService
      .getAuthors()
      .then((autores) => {
        this.autores = Object.assign([], autores.data);
      })
      .catch((resp) => {
        this.toastService.mostrarMensaje('Error al cargar los datos', false);
      });
  }

  enviarDatos(): void {
    this.noticia.titulo = this.titulo.value;
    this.noticia.contenido = this.contenido.value;
    this.noticia.autor = {
      id: this.idAutor.value,
    };
    this.noticia.fechaPublicacion = this.fechaPublicacion.value;
    this.noticia.imagen = this.imagen.value.name;

    const formData = new FormData();
    Object.entries(this.newForm.value).forEach(([key, value]: any[]) => {
      formData.append(key, value);
    });

    if (this.idNoticia && !isNaN(Number(this.idNoticia))) {
      this.noticia.id = Number(this.idNoticia.valueOf());
      this.newService
        .updateNew(this.noticia, this.ficheroImagen)
        .then((resp) => {
          this.toastService
            .mostrarMensaje('Noticia actualizada correctamente', true)
            .then(() => {
              this.router.navigateByUrl('/admin/noticias');
            });
        })
        .catch((resp) => {
          this.toastService.mostrarMensaje(
            'Error al actualizar la noticia',
            false
          );
        });
    } else {
      this.newService
        .createNew(this.noticia)
        .then((resp) => {
          this.toastService
            .mostrarMensaje('Noticia creada correctamente', true)
            .then(() => {
              this.router.navigateByUrl('/admin/noticias');
            });
        })
        .catch((resp) => {
          this.toastService.mostrarMensaje('Error al crear la noticia', false);
        });
    }
  }

  onSelect(event: any): void {
    this.ficheroImagen = event.target.files ? event.target.files[0] : null;
    this.newForm.patchValue({ imagen: this.ficheroImagen });
    this.newForm.get('imagen')?.updateValueAndValidity();
  }
}
