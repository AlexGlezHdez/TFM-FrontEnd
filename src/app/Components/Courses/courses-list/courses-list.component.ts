import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduledCourseDTO } from 'src/app/Models/scheduled-course.dto';
import { ScheduledCourseService } from 'src/app/Services/scheduled-course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  cursos!: ScheduledCourseDTO[];

  constructor(
    private scheduledCourseService: ScheduledCourseService,
    private router: Router
  ) {
    this.cargarCursos();
  }

  private async cargarCursos(): Promise<void> {
    await this.scheduledCourseService.getCourses().then((cursos) => {
      this.cursos = cursos.data;
    });
    //        .catch((error) => this.sharedService.errorLog(error.error));
  }

  verCurso(idCurso: number) {
    this.router.navigateByUrl('/escuela/curso/' + idCurso);
  }
}
