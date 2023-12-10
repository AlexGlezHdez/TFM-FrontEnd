import { Component } from '@angular/core';
import { CenterService } from 'src/app/Services/center.service';
import { CenterDTO } from 'src/app/Models/center.dto';
import { Router } from '@angular/router';

import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-centers-manage',
  templateUrl: './centers-manage.component.html',
  styleUrls: ['./centers-manage.component.scss'],
})
export class CentersManageComponent {
  centros!: CenterDTO[];

  nombreCentro!: UntypedFormControl;

  constructor(private centerService: CenterService, private router: Router) {
    this.nombreCentro = new UntypedFormControl('');

    this.cargarCentros();
  }

  private async cargarCentros(): Promise<void> {
    await this.centerService.getCenters().then((centros) => {
      this.centros = centros.data;
    });
    //        .catch((error) => this.sharedService.errorLog(error.error));
  }

  actualizarCentro = (idCentro: number): void => {
    this.router.navigateByUrl('/admin/centro-buceo/' + idCentro);
  };

  borrarCentro = async (idCentro: number): Promise<void> => {
    // Acción de eliminar una noticia
    //this.router.navigateByUrl('/admin/noticia/' + idCentro);
    await this.centerService.deleteCenter(idCentro).then(() => {
      this.cargarCentros;
    });
  };
}
