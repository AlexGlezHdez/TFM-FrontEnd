import { Component, OnInit, Input, numberAttribute } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from 'src/app/Services/member.service';
import { MemberDTO } from 'src/app/Models/member.dto';

import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.scss'],
})
export class MemberInfoComponent implements OnInit {
  miembro!: MemberDTO;
  //  private idMiembro: string;

  nombre: UntypedFormControl;
  direccion: UntypedFormControl;
  codigoPostal: UntypedFormControl;
  ciudad: UntypedFormControl;
  telefono: UntypedFormControl;
  userInfoForm: UntypedFormGroup;

  @Input({ transform: numberAttribute }) idMiembro = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
    private formBuilder: UntypedFormBuilder //    private contacto: ContactoService
  ) {
    // Falseamos el id del miembro de momento
    this.idMiembro = 1;

    // this.idMiembro = this.activatedRoute.snapshot.paramMap.get('id') || '';

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
        this.miembro = miembro[0];
        this.nombre.setValue(this.miembro.nombre);
        this.direccion.setValue(this.miembro.direccion);
        this.codigoPostal.setValue(this.miembro.codigoPostal);
        this.ciudad.setValue(this.miembro.ciudad);
        this.telefono.setValue(this.miembro.telefono);
      });
    }
  }

  actualizarDatos(): void {
    this.miembro.nombre = this.nombre.value;
    this.miembro.direccion = this.direccion.value;
    this.miembro.codigoPostal = this.codigoPostal.value;
    this.miembro.ciudad = this.ciudad.value;
    this.miembro.telefono = this.telefono.value;
    /*
    this.servicioContacto
      .enviarMensaje2(this.contacto)
      .subscribe((resp) => console.log(resp));
      */
  }
}
