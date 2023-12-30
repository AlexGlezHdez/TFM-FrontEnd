import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/Services/member.service';
import {
  FormGroup,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-member-password',
  templateUrl: './member-password.component.html',
  styleUrls: ['./member-password.component.scss'],
})
export class MemberPasswordComponent {
  passwordActual: UntypedFormControl;
  passwordNueva: UntypedFormControl;
  passwordRepetida: UntypedFormControl;
  passwordForm: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private localStorageService: LocalStorageService,
    private router: Router,
    private toastService: ToastService,

    private memberService: MemberService
  ) {
    this.passwordActual = new UntypedFormControl('', [Validators.required]);

    this.passwordNueva = new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]);

    this.passwordRepetida = new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]);

    this.passwordForm = this.formBuilder.group(
      {
        passwordActual: this.passwordActual,
        passwordNueva: this.passwordNueva,
        passwordRepetida: this.passwordRepetida,
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password1 = formGroup.controls['passwordNueva'].value;
    const password2 = formGroup.controls['passwordRepetida'].value;

    return password1 === password2
      ? null
      : { passwordNotMatch: { value: false } };
  }

  actualizarClave(): void {
    const idMiembro = this.localStorageService.get('user_id') || '';
    this.memberService
      .updatePassword(
        idMiembro,
        this.passwordActual.value,
        this.passwordNueva.value
      )
      .then((resp) => {
        this.toastService
          .mostrarMensaje('Contraseña actualizada correctamente', true)
          .then(() => {
            this.router.navigateByUrl('/miembros');
          });
      })
      .catch((resp) => {
        this.toastService.mostrarMensaje(
          'Error al actualizar la contraseña',
          false
        );
      });
  }
}
