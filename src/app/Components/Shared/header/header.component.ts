import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter, take } from 'rxjs/operators';

import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menu_desplegado: boolean;

  isLoggedIn!: boolean;

  constructor(private router: Router, private loginService: LoginService) {
    this.menu_desplegado = false;
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        this.menu_desplegado = false;
      });

    this.loginService.loggedInManagement.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
    });
  }
}
