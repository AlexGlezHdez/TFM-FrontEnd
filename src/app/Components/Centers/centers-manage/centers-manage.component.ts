import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CenterService } from 'src/app/Services/center.service';
import { CenterDTO } from 'src/app/Models/center.dto';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/Services/toast.service';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-centers-manage',
  templateUrl: './centers-manage.component.html',
  styleUrls: ['./centers-manage.component.scss'],
})
export class CentersManageComponent {
  centros!: CenterDTO[];

  nombreCentro!: UntypedFormControl;

  constructor(
    private centerService: CenterService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.nombreCentro = new UntypedFormControl('');

    this.cargarCentros();
  }

  ngOnInit() {
    this.nombreCentro.valueChanges.subscribe(() => {
      this.cargarCentros();
    });
  }

  private async cargarCentros(): Promise<void> {
    const filtroNombre: string = this.nombreCentro.value;
    await this.centerService
      .getCenters(filtroNombre)
      .then((centros) => {
        this.centros = centros.data;
      })
      .catch((resp) => {
        this.toastService.mostrarMensaje('Error al cargar los centros', false);
      });
  }

  actualizarCentro = (idCentro: number): void => {
    this.router.navigateByUrl('/admin/centro-buceo/' + idCentro);
  };

  borrarCentro = async (idCentro: number): Promise<void> => {
    await this.centerService
      .deleteCenter(idCentro)
      .then(() => {
        this.cargarCentros();
        this.toastService.mostrarMensaje('Centro borrado correctamente', true);
      })
      .catch((resp) => {
        this.toastService.mostrarMensaje('Error al borrar el centro', false);
      });
  };
}
