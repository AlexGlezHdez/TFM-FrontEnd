import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CourseService } from 'src/app/Services/course.service';
import { CourseDTO } from 'src/app/Models/course.dto';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/Services/toast.service';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-courses-manage',
  templateUrl: './courses-manage.component.html',
  styleUrls: ['./courses-manage.component.scss'],
})
export class CoursesManageComponent implements OnInit {
  cursos!: CourseDTO[];

  tituloCurso: UntypedFormControl;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.tituloCurso = new UntypedFormControl('');

    this.cargarCursos();
  }

  ngOnInit() {
    this.tituloCurso.valueChanges.subscribe(() => {
      this.cargarCursos();
    });
  }

  private async cargarCursos(): Promise<void> {
    const filtroTitulo: string = this.tituloCurso.value;
    await this.courseService
      .getCourses(filtroTitulo)
      .then((cursos) => {
        this.cursos = Object.assign([], cursos.data);
      })
      .catch((resp) => {
        this.toastService.mostrarMensaje('Error al cargar los cursos', false);
      });
  }

  verCurso(idCurso: number) {
    this.router.navigateByUrl('/curso/' + idCurso);
  }

  actualizarCurso = (idCurso: number): void => {
    this.router.navigateByUrl('/admin/curso/' + idCurso);
  };

  borrarCurso = async (idCurso: number): Promise<void> => {
    if (confirm('¿Seguro que deseas borrar el curso?')) {
      this.courseService
        .deleteCourse(idCurso)
        .then(() => {
          this.cargarCursos();
          this.toastService.mostrarMensaje('Curso borrado correctamente', true);
        })
        .catch((resp) => {
          this.toastService.mostrarMensaje('Error al borrar el curso', false);
        });
    }
  };
}
