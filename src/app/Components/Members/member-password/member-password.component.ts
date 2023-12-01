import { Component } from '@angular/core';
import {
  FormGroup,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { MemberService } from 'src/app/Services/member.service';
import { Router } from '@angular/router';

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
    console.log(
      password1 + ' --' + password2 + ' ---> ' + password1 === password2
    );
    return password1 === password2
      ? null
      : { passwordNotMatch: { value: false } };
  }

  async actualizarClave(): Promise<void> {
    try {
      const idMiembro = this.localStorageService.get('user_id') || '';
      await this.memberService.updatePassword(
        idMiembro,
        this.passwordActual.value,
        this.passwordNueva.value
      );

      // update options menu
      //      this.headerMenusService.headerManagement.next(headerInfo);
      this.router.navigateByUrl('/');
    } catch (error: any) {
      //      this.sharedService.errorLog(error.error);
      /*
      await this.sharedService.managementToast(
        'loginFeedback',
        false,
        error.error
      );
      */
    }
  }
}
