import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduledCourseDTO } from 'src/app/Models/scheduled-course.dto';
import { ScheduledCourseService } from 'src/app/Services/scheduled-course.service';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  cursos!: ScheduledCourseDTO[];

  constructor(
    private scheduledCourseService: ScheduledCourseService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.cargarCursos();
  }

  private async cargarCursos(): Promise<void> {
    await this.scheduledCourseService
      .getCourses()
      .then((cursos) => {
        this.cursos = cursos.data;
      })
      .catch((error) =>
        this.toastService.mostrarMensaje('Error al cargar los cursos', false)
      );
  }

  verCurso(idCurso: number) {
    this.router.navigateByUrl('/escuela/curso/' + idCurso);
  }
}
