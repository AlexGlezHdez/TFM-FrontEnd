import { Component, OnInit, Input, numberAttribute } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/app/Services/member.service';
import { MemberDTO } from 'src/app/Models/member.dto';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-member-update',
  templateUrl: './member-update.component.html',
  styleUrls: ['./member-update.component.scss'],
})
export class MemberUpdateComponent implements OnInit {
  miembro!: MemberDTO;

  idMiembro: number;

  nombre: UntypedFormControl;
  direccion: UntypedFormControl;
  codigoPostal: UntypedFormControl;
  ciudad: UntypedFormControl;
  telefono: UntypedFormControl;
  email: UntypedFormControl;
  admin: UntypedFormControl;
  memberForm: UntypedFormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private memberService: MemberService,
    private toastService: ToastService,
    private formBuilder: UntypedFormBuilder
  ) {
    this.idMiembro = Number(
      this.activatedRoute.snapshot.paramMap.get('id') || ''
    );

    this.nombre = new UntypedFormControl('', [Validators.required]);
    this.direccion = new UntypedFormControl('', [Validators.required]);
    this.codigoPostal = new UntypedFormControl('', [Validators.required]);
    this.ciudad = new UntypedFormControl('', [Validators.required]);
    this.telefono = new UntypedFormControl('', [Validators.required]);
    this.email = new UntypedFormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]);
    this.admin = new UntypedFormControl(false);

    this.memberForm = this.formBuilder.group({
      nombre: this.nombre,
      direccion: this.direccion,
      codigoPostal: this.codigoPostal,
      ciudad: this.ciudad,
      telefono: this.telefono,
      email: this.email,
      admin: this.admin,
    });

    this.miembro = new MemberDTO();
  }

  async ngOnInit(): Promise<void> {
    if (this.idMiembro) {
      await this.memberService.getMember(this.idMiembro).then((miembro) => {
        this.miembro = miembro.data;
        this.nombre.setValue(this.miembro.nombre);
        this.direccion.setValue(this.miembro.direccion);
        this.codigoPostal.setValue(this.miembro.codigoPostal);
        this.ciudad.setValue(this.miembro.ciudad);
        this.telefono.setValue(this.miembro.telefono);
        this.email.setValue(this.miembro.email);
        this.admin.setValue(this.miembro.admin);
      });
    }
  }

  enviarDatos(): void {
    this.miembro.nombre = this.nombre.value;
    this.miembro.direccion = this.direccion.value;
    this.miembro.codigoPostal = this.codigoPostal.value;
    this.miembro.ciudad = this.ciudad.value;
    this.miembro.telefono = this.telefono.value;
    this.miembro.admin = this.admin.value;
    this.miembro.email = this.email.value;

    const formData = new FormData();
    Object.entries(this.memberForm.value).forEach(([key, value]: any[]) => {
      formData.append(key, value);
    });

    if (this.idMiembro) {
      this.miembro.id = this.idMiembro;
      this.memberService
        .updateMember(this.miembro)
        .then((resp) => {
          this.toastService
            .mostrarMensaje('Miembro actualizado correctamente', true)
            .then(() => {
              this.router.navigateByUrl('/admin/miembros');
            });
        })
        .catch((resp) => {
          this.toastService.mostrarMensaje(
            'Error al actualizar el miembro',
            false
          );
        });
    } else {
      this.memberService
        .createMember(this.miembro)
        .then((resp) => {
          this.toastService
            .mostrarMensaje('Miembro creado correctamente', true)
            .then(() => {
              this.router.navigateByUrl('/admin/miembros');
            });
        })
        .catch((resp) => {
          this.toastService.mostrarMensaje('Error al crear el miembro', false);
        });
    }
  }
}
