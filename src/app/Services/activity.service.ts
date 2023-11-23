import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivityDTO } from '../Models/activity.dto';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private urlApi: string;
  private controller: string;

  private mockupNewsDataFile: string = '/assets/activities-data.json';

  constructor(private http: HttpClient) {
    this.controller = 'posts';
    this.urlApi = 'http://localhost:3000/' + this.controller;
  }

  getActivities(): Promise<ActivityDTO[]> {
    return firstValueFrom(
      this.http.get<ActivityDTO[]>(this.mockupNewsDataFile)
    );
  }

  getActivity(idActividad: string): Promise<ActivityDTO[]> {
    return firstValueFrom(
      this.http.get<ActivityDTO[]>(this.mockupNewsDataFile)
    );
  }
}
