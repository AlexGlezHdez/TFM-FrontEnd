import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorDTO } from 'src/app/Models/author.dto';
import { AuthorService } from 'src/app/Services/author.service';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-author-update',
  templateUrl: './author-update.component.html',
  styleUrls: ['./author-update.component.scss'],
})
export class AuthorUpdateComponent {
  autor!: AuthorDTO;

  idAutor: string;

  nombre: UntypedFormControl;
  authorForm: UntypedFormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private authorService: AuthorService,
    private toastService: ToastService
  ) {
    this.idAutor = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.nombre = new UntypedFormControl('', [Validators.required]);

    this.authorForm = this.formBuilder.group({
      nombre: this.nombre,
    });

    this.autor = new AuthorDTO();
  }

  async ngOnInit(): Promise<void> {
    if (this.idAutor) {
      this.authorService.getAuthor(this.idAutor).then((autor) => {
        this.autor = autor.data;
        this.nombre.setValue(this.autor.nombre);
      });
    }
  }

  enviarDatos(): void {
    this.autor.nombre = this.nombre.value;

    const formData = new FormData();
    Object.entries(this.authorForm.value).forEach(([key, value]: any[]) => {
      formData.append(key, value);
    });

    if (this.idAutor && !isNaN(Number(this.idAutor))) {
      this.autor.id = Number(this.idAutor.valueOf());
      this.authorService
        .updateAuthor(this.autor)
        .then((resp) => {
          this.toastService
            .mostrarMensaje('Autor actualizado correctamente', true)
            .then(() => {
              this.router.navigateByUrl('/admin/autores');
            });
        })
        .catch((resp) => {
          this.toastService.mostrarMensaje(
            'Error al actualizar el autor',
            false
          );
        });
    } else {
      this.authorService
        .createAuthor(this.autor)
        .then((resp) => {
          this.toastService
            .mostrarMensaje('Autor creado correctamente', true)
            .then(() => {
              this.router.navigateByUrl('/admin/autores');
            });
        })
        .catch((resp) => {
          this.toastService.mostrarMensaje('Error al crear el autor', false);
        });
    }
  }
}
