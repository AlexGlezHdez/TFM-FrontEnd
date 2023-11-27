import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseDTO } from 'src/app/Models/course.dto';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  cursos!: CourseDTO[];

  constructor(private courseService: CourseService, private router: Router) {
    this.cargarCursos();
  }

  private async cargarCursos(): Promise<void> {
    await this.courseService.getCourses().then((cursos) => {
      this.cursos = cursos;
    });
    //        .catch((error) => this.sharedService.errorLog(error.error));
  }

  verCurso(idCurso: number) {
    this.router.navigateByUrl('/escuela/curso/' + idCurso);
  }
}
