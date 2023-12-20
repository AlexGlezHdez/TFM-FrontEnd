import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseDTO } from '../Models/course.dto';
import { ScheduledCourseDTO } from '../Models/scheduled-course.dto';

import { firstValueFrom } from 'rxjs';

import { Constantes } from '../Components/Shared/constants/constants.component';

interface CursoAPI {
  id?: number;
  fecha: string;
  detalles: string;
  idCurso: number;
}

@Injectable({
  providedIn: 'root',
})
export class ScheduledCourseService {
  private urlApiBase: string;
  private urlApi: string;
  private coursesCalendarController: string;

  constructor(private http: HttpClient) {
    this.coursesCalendarController = 'v1/calendario-cursos';
    this.urlApiBase = Constantes.urlAPI;
    this.urlApi = this.urlApiBase + this.coursesCalendarController;
  }

  getCourses(filtroTitulo?: string): Promise<any> {
    const filtro: string = filtroTitulo ? '?titulo[lk]=' + filtroTitulo : '';
    return firstValueFrom(this.http.get(this.urlApi));
  }

  getCourse(idCurso: string): Promise<any> {
    return firstValueFrom(this.http.get(this.urlApi + '/' + idCurso));
  }

  updateCourse(cursoAgendado: ScheduledCourseDTO): Promise<any> {
    const cursoAPI: CursoAPI = {
      id: cursoAgendado.id,
      fecha: cursoAgendado.fecha,
      detalles: cursoAgendado.detalles,
      idCurso: cursoAgendado.curso.id,
    };

    return firstValueFrom(
      this.http.patch(this.urlApi + '/' + cursoAgendado.id, cursoAPI)
    );
  }
  createCourse(cursoAgendado: ScheduledCourseDTO): Promise<any> {
    const cursoAPI: CursoAPI = {
      fecha: cursoAgendado.fecha,
      detalles: cursoAgendado.detalles,
      idCurso: cursoAgendado.curso.id,
    };

    return firstValueFrom(this.http.post(this.urlApi, cursoAPI));
  }

  deleteCourse(idCurso: number): Promise<any> {
    return firstValueFrom(this.http.delete(this.urlApi + '/' + idCurso));
  }
}
