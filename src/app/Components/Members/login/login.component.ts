import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthDTO } from 'src/app/Models/auth.dto';
import { AuthService } from 'src/app/Services/auth.service';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { LoginService } from 'src/app/Services/login.service';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginUser: AuthDTO;
  email: UntypedFormControl;
  password: UntypedFormControl;
  loginForm: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastService
  ) {
    this.loginUser = new AuthDTO('', '', '', '');

    this.email = new UntypedFormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]);

    this.password = new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]);

    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
    });
  }

  async login(): Promise<void> {
    this.loginUser.email = this.email.value;
    this.loginUser.password = this.password.value;
    try {
      const authToken = await this.authService.login(this.loginUser);
      this.loginUser.user_id = authToken.id;
      this.loginUser.access_token = authToken.token;

      this.localStorageService.set('user_id', this.loginUser.user_id);
      this.localStorageService.set('access_token', this.loginUser.access_token);

      this.toastService
        .mostrarMensaje('Inicio de sesión correcto', true)
        .then(() => {
          this.loginService.loggedInManagement.next(true);
          this.router.navigateByUrl('/');
        });
    } catch (error: any) {
      this.toastService.mostrarMensaje('Datos de acceso incorrectos', false);
    }
  }
}
