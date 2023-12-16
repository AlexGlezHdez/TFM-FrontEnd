import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduledActivityDTO } from 'src/app/Models/scheduled-activity.dto';
import { ScheduledActivityService } from 'src/app/Services/scheduled-activity.service';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss'],
})
export class ActivitiesListComponent {
  actividades!: ScheduledActivityDTO[];

  constructor(
    private scheduledActivityService: ScheduledActivityService,
    private router: Router
  ) {
    this.cargarActividades();
  }

  private async cargarActividades(): Promise<void> {
    await this.scheduledActivityService.getActivities().then((actividades) => {
      console.log(actividades);
      this.actividades = actividades.data;
    });
    //        .catch((error) => this.sharedService.errorLog(error.error));
  }

  leerActividad(idActividad: number) {
    this.router.navigateByUrl('/actividad/' + idActividad);
  }
}
