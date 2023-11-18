import { Component } from '@angular/core';

import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

import { ContactDTO } from 'src/app/Models/contact.dto';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contacto: ContactDTO;

  nombre: UntypedFormControl;
  email: UntypedFormControl;
  asunto: UntypedFormControl;
  mensaje: UntypedFormControl;
  msgForm: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder
  ) //    private contacto: ContactoService
  {
    this.contacto = new ContactDTO();

    this.nombre = new UntypedFormControl('', [Validators.required]);

    this.email = new UntypedFormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]);

    this.asunto = new UntypedFormControl('', [Validators.required]);
    this.mensaje = new UntypedFormControl('', [Validators.required]);

    this.msgForm = this.formBuilder.group({
      nombre: this.nombre,
      email: this.email,
      asunto: this.asunto,
      mensaje: this.mensaje,
    });
  }

  enviarMsg(): void {
    this.contacto.nombre = this.nombre.value;
    this.contacto.email = this.email.value;
    this.contacto.asunto = this.asunto.value;
    this.contacto.mensaje = this.mensaje.value;
    /*
    this.servicioContacto
      .enviarMensaje2(this.contacto)
      .subscribe((resp) => console.log(resp));
      */
  }
}
