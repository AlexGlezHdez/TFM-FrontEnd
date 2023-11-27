import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { AuthService } from 'src/app/Services/auth.service';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { LoggedService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menu_desplegado: boolean;
  isLoggedIn: boolean = false;
  subs: Subscription = new Subscription();

  subs2: any;

  // 3er intento
  isLoggedIn_2!: boolean;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private authService: AuthService,
    private loginService: LoggedService
  ) {
    this.menu_desplegado = false;
    //    this.isLoggedIn = this.authService.isLoggedIn();
  }

  ngOnInit() {
    this.subs.add(
      this.localStorageService.localStorageChanged$.subscribe(() => {
        const newState: boolean = this.authService.isLoggedIn();
        //this.localStorageService.set('access_token', JSON.stringify(newState));
        //this.isLoggedIn = newState;
        console.log('Loggin: ' + JSON.stringify(newState));
      })
    );

    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        this.menu_desplegado = false;
      });

    if (this.subs2) {
      this.subs2.unsubscribe();
    }
    this.subs2 = this.localStorageService
      .getLoggedIn()
      //      .pipe(take(1))
      .subscribe((status) => {
        this.isLoggedIn = this.authService.isLoggedIn();
        console.log('Loggin --- ' + JSON.stringify(this.isLoggedIn));
      });

    this.loginService.loggedInManagement.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn_2 = isLoggedIn;
    });
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  logout(): void {
    this.localStorageService.remove('user_id');
    this.localStorageService.remove('access_token');
    this.loginService.loggedInManagement.next(false);
    this.router.navigateByUrl('/');
  }
}
