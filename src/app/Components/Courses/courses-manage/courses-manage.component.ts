import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CourseService } from 'src/app/Services/course.service';
import { CourseDTO } from 'src/app/Models/course.dto';
import { Router } from '@angular/router';

import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-courses-manage',
  templateUrl: './courses-manage.component.html',
  styleUrls: ['./courses-manage.component.scss'],
})
export class CoursesManageComponent implements OnInit {
  cursos!: CourseDTO[];

  tituloCurso: UntypedFormControl;

  constructor(private courseService: CourseService, private router: Router) {
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
    await this.courseService.getCourses(filtroTitulo).then((cursos) => {
      this.cursos = Object.assign([], cursos.data);
    });
    //        .catch((error) => this.sharedService.errorLog(error.error));
  }

  verCurso(idCurso: number) {
    this.router.navigateByUrl('/curso/' + idCurso);
  }

  actualizarCurso(idCurso: number): void {
    this.router.navigateByUrl('/admin/curso/' + idCurso);
  }

  async borrarCurso(idCurso: number): Promise<void> {
    this.courseService.deleteCourse(idCurso).then(() => {
      this.cargarCursos();
    });
  }
}
