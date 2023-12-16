import { Component } from '@angular/core';
import { ScheduledCourseService } from 'src/app/Services/scheduled-course.service';
import { ScheduledCourseDTO } from 'src/app/Models/scheduled-course.dto';
import { Router } from '@angular/router';

import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-course-schedule-manage',
  templateUrl: './course-schedule-manage.component.html',
  styleUrls: ['./course-schedule-manage.component.scss'],
})
export class CourseScheduleManageComponent {
  cursos!: ScheduledCourseDTO[];

  tituloCurso: UntypedFormControl;

  constructor(
    private scheduledCourseService: ScheduledCourseService,
    private router: Router
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
      });
    //        .catch((error) => this.sharedService.errorLog(error.error));
  }

  verCurso(idCurso: number) {
    this.router.navigateByUrl('/curso/' + idCurso);
  }

  actualizarCurso(idCurso: number): void {
    this.router.navigateByUrl('/admin/calendario-curso/' + idCurso);
  }

  async borrarCurso(idCurso: number): Promise<void> {
    this.scheduledCourseService.deleteCourse(idCurso).then(() => {
      this.cargarCursos();
    });
  }
}
