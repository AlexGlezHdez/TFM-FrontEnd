import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ScheduledActivityDTO } from 'src/app/Models/scheduled-activity.dto';
import { ScheduledActivityService } from 'src/app/Services/scheduled-activity.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss'],
})
export class ActivityDetailComponent {
  actividadAgendada: ScheduledActivityDTO;

  private idActividad: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private scheduledActivityService: ScheduledActivityService,
    private location: Location
  ) {
    this.idActividad = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.actividadAgendada = new ScheduledActivityDTO();
  }

  async ngOnInit(): Promise<void> {
    await this.scheduledActivityService
      .getActivity(this.idActividad)
      .then((actividad) => {
        this.actividadAgendada = actividad.data;
      });
  }

  back(): void {
    this.location.back();
  }
}
