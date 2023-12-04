import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss'],
})
export class ListElementComponent {
  @Input({ required: true }) id!: number;
  @Input({ required: true }) titulo!: string;
  @Input() updateFunction: any;
  @Input() deleteFunction: any;
}
