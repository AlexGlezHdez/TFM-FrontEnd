import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CenterDTO } from 'src/app/Models/center.dto';
import { CenterService } from 'src/app/Services/center.service';

@Component({
  selector: 'app-center-update',
  templateUrl: './center-update.component.html',
  styleUrls: ['./center-update.component.scss'],
})
export class CenterUpdateComponent {
  centro!: CenterDTO;

  idCentro: string;

  nombre: UntypedFormControl;
  direccion: UntypedFormControl;
  accesible: UntypedFormControl;
  latitud: UntypedFormControl;
  longitud: UntypedFormControl;
  centerForm: UntypedFormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private centerService: CenterService
  ) {
    this.idCentro = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.nombre = new UntypedFormControl('', [Validators.required]);
    this.direccion = new UntypedFormControl('', [Validators.required]);
    this.accesible = new UntypedFormControl('', [Validators.required]);
    this.latitud = new UntypedFormControl('', [Validators.required]);
    this.longitud = new UntypedFormControl('', [Validators.required]);

    this.centerForm = this.formBuilder.group({
      nombre: this.nombre,
      direccion: this.direccion,
      accesible: this.accesible,
      latitud: this.latitud,
      longitud: this.longitud,
    });
  }

  async ngOnInit(): Promise<void> {
    if (this.idCentro) {
      await this.centerService.getCenter(this.idCentro).then((centro) => {
        this.centro = centro.data;
        this.centro.position = {
          lat: centro.data.latitud,
          lng: centro.data.longitud,
        };

        this.nombre.setValue(this.centro.nombre);
        this.direccion.setValue(this.centro.direccion);
        this.accesible.setValue(this.centro.accesible);
        this.latitud.setValue(this.centro.position.lat);
        this.longitud.setValue(this.centro.position.lng);
      });
    } else {
      this.centro = new CenterDTO(
        '',
        '',
        '',
        '',
        '',
        { lat: 0, lng: 0 },
        false
      );
    }
  }

  enviarDatos(): void {
    this.centro.nombre = this.nombre.value;
    this.centro.direccion = this.direccion.value;
    this.centro.accesible = this.accesible.value;
    this.centro.position.lat = this.latitud.value;
    this.centro.position.lng = this.longitud.value;

    // Gestionamos si se trata de una actualizacion o de una centro nueva segun exista idNoticia
    if (this.idCentro && !isNaN(Number(this.idCentro))) {
      // Es una actualización
      this.centro.id = Number(this.idCentro.valueOf());
      console.log('Actualizando centro...');
      console.log(JSON.stringify(this.centro));
      this.centerService.updateCenter(this.centro);
    } else {
      console.log('Creando centro...');
      this.centerService.createCenter(this.centro);
    }
  }
}
