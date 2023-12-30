import { Component, OnInit, Input, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/Services/member.service';
import { MemberDTO } from 'src/app/Models/member.dto';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.scss'],
})
export class MemberInfoComponent implements OnInit {
  @Input({ required: true }) idMiembro: number;

  miembro!: MemberDTO;

  nombre: UntypedFormControl;
  direccion: UntypedFormControl;
  codigoPostal: UntypedFormControl;
  ciudad: UntypedFormControl;
  telefono: UntypedFormControl;
  userInfoForm: UntypedFormGroup;

  constructor(
    private router: Router,
    private memberService: MemberService,
    private localStorageService: LocalStorageService,
    private toastService: ToastService,
    private formBuilder: UntypedFormBuilder
  ) {
    this.idMiembro = Number(this.localStorageService.get('user_id'));

    this.nombre = new UntypedFormControl('', [Validators.required]);
    this.direccion = new UntypedFormControl('', [Validators.required]);
    this.codigoPostal = new UntypedFormControl('', [Validators.required]);
    this.ciudad = new UntypedFormControl('', [Validators.required]);
    this.telefono = new UntypedFormControl('', [Validators.required]);

    this.userInfoForm = this.formBuilder.group({
      nombre: this.nombre,
      direccion: this.direccion,
      codigoPostal: this.codigoPostal,
      ciudad: this.ciudad,
      telefono: this.telefono,
    });
  }

  async ngOnInit(): Promise<void> {
    if (this.idMiembro) {
      await this.memberService.getMember(this.idMiembro).then((miembro) => {
        console.log(miembro);
        this.miembro = miembro.data;
        this.nombre.setValue(this.miembro.nombre);
        this.direccion.setValue(this.miembro.direccion);
        this.codigoPostal.setValue(this.miembro.codigoPostal);
        this.ciudad.setValue(this.miembro.ciudad);
        this.telefono.setValue(this.miembro.telefono);
      });
    }
  }

  actualizarDatos(): void {
    this.miembro.id = this.idMiembro;
    this.miembro.nombre = this.nombre.value;
    this.miembro.direccion = this.direccion.value;
    this.miembro.codigoPostal = this.codigoPostal.value;
    this.miembro.ciudad = this.ciudad.value;
    this.miembro.telefono = this.telefono.value;

    this.memberService
      .updateMember(this.miembro)
      .then((resp) => {
        this.toastService
          .mostrarMensaje('Datos actualizados correctamente', true)
          .then(() => {
            this.router.navigateByUrl('/miembros');
          });
      })
      .catch((resp) => {
        this.toastService.mostrarMensaje(
          'Error al actualizar los datos',
          false
        );
      });
  }
}
