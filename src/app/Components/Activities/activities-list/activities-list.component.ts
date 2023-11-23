import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityDTO } from 'src/app/Models/activity.dto';
import { ActivityService } from 'src/app/Services/activity.service';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss'],
})
export class ActivitiesListComponent {
  actividades!: ActivityDTO[];

  constructor(
    private activityService: ActivityService,
    private router: Router
  ) {
    this.cargarActividades();
  }

  private async cargarActividades(): Promise<void> {
    await this.activityService.getActivities().then((actividades) => {
      this.actividades = actividades;
    });
    //        .catch((error) => this.sharedService.errorLog(error.error));
  }

  leerActividad(idActividad: number) {
    this.router.navigateByUrl('/actividad/' + idActividad);
  }
}
