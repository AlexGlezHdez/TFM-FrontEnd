import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ScheduledCourseService } from 'src/app/Services/scheduled-course.service';
import { ScheduledCourseDTO } from 'src/app/Models/scheduled-course.dto';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/Services/toast.service';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-course-schedule-manage',
  templateUrl: './course-schedule-manage.component.html',
  styleUrls: ['./course-schedule-manage.component.scss'],
})
export class CourseScheduleManageComponent implements OnInit {
  cursos!: ScheduledCourseDTO[];

  tituloCurso: UntypedFormControl;

  constructor(
    private scheduledCourseService: ScheduledCourseService,
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
    await this.scheduledCourseService
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
    this.router.navigateByUrl('/admin/calendario-curso/' + idCurso);
  };

  borrarCurso = async (idCurso: number): Promise<void> => {
    if (confirm('¿Seguro que deseas borrar el curso del calendario?')) {
      this.scheduledCourseService
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
