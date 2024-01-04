import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AuthorDTO } from 'src/app/Models/author.dto';
import { AuthorService } from 'src/app/Services/author.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/Services/toast.service';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-authors-manage',
  templateUrl: './authors-manage.component.html',
  styleUrls: ['./authors-manage.component.scss'],
})
export class AuthorsManageComponent implements OnInit {
  autores!: AuthorDTO[];

  nombreAutor: UntypedFormControl;

  constructor(
    private authorService: AuthorService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.nombreAutor = new UntypedFormControl('');

    this.cargarAutores();
  }

  ngOnInit() {
    this.nombreAutor.valueChanges.subscribe(() => {
      this.cargarAutores();
    });
  }

  private async cargarAutores(): Promise<void> {
    const filtroTitulo: string = this.nombreAutor.value;
    await this.authorService
      .getAuthors(filtroTitulo)
      .then((autores) => {
        this.autores = Object.assign([], autores.data);
      })
      .catch((resp) => {
        this.toastService.mostrarMensaje('Error al cargar los autores', false);
      });
  }

  actualizarAutor = (idAutor: number): void => {
    this.router.navigateByUrl('/admin/autor/' + idAutor);
  };

  borrarAutor = async (idAutor: number): Promise<void> => {
    await this.authorService
      .deleteAuthor(idAutor)
      .then(() => {
        this.cargarAutores();
        this.toastService.mostrarMensaje('Autor borrado correctamente', true);
      })
      .catch((resp) => {
        this.toastService.mostrarMensaje('Error al borrar el autor', false);
      });
  };
}
