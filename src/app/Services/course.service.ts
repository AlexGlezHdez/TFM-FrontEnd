import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseDTO } from '../Models/course.dto';

import { firstValueFrom } from 'rxjs';

import { Constantes } from '../Components/Shared/constants/constants.component';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private urlApiBase: string;
  private urlApi: string;
  private courseController: string;

  private mockupCoursesDataFile: string = '/assets/courses-data.json';

  constructor(private http: HttpClient) {
    this.courseController = 'v1/cursos';
    this.urlApiBase = Constantes.urlAPI;
    this.urlApi = this.urlApiBase + this.courseController;
  }

  getCourses(filtroTitulo?: string): Promise<any> {
    const filtro: string = filtroTitulo ? '?titulo[lk]=' + filtroTitulo : '';
    return firstValueFrom(this.http.get(this.urlApi + filtro));
  }

  getCourse(idCurso: string): Promise<any> {
    return firstValueFrom(this.http.get(this.urlApi + '/' + idCurso));
  }

  updateCourse(curso: CourseDTO): Promise<any> {
    return firstValueFrom(this.http.patch(this.urlApi + '/' + curso.id, curso));
  }

  createCourse(curso: CourseDTO): Promise<any> {
    return firstValueFrom(this.http.post(this.urlApi, curso));
  }

  deleteCourse(idCurso: number): Promise<any> {
    return firstValueFrom(this.http.delete(this.urlApi + '/' + idCurso));
  }
}
