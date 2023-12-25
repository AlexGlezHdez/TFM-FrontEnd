import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss'],
})
export class ListElementComponent {
  @Input({ required: true }) id!: number;
  @Input({ required: true }) linea_principal!: string;
  @Input() linea_secundaria: string | null = '';
  @Input() updateFunction: any = null;
  @Input() deleteFunction: any = null;

  constructor(private router: Router) {}
}
