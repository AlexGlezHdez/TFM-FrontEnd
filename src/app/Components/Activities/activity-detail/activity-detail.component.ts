import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivityDTO } from 'src/app/Models/activity.dto';
import { ActivityService } from 'src/app/Services/activity.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss'],
})
export class ActivityDetailComponent {
  actividad: ActivityDTO;

  private idActividad: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private activityService: ActivityService,
    private location: Location
  ) {
    this.idActividad = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.actividad = new ActivityDTO('', '', '', '', '', 0);
  }

  async ngOnInit(): Promise<void> {
    await this.activityService
      .getActivity(this.idActividad)
      .then((actividad) => {
        this.actividad = actividad[0];
      });
  }

  back(): void {
    this.location.back();
  }
}
