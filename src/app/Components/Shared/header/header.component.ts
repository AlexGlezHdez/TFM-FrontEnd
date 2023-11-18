import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menu_desplegado: boolean;

  constructor(private router: Router) {
    this.menu_desplegado = false;
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        this.menu_desplegado = false;
      });
  }
}
