import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input()
  All: number = 0;

  @Input()
  InStock: number = 0;

  @Input()
  OutOfStock: number = 0;

  selectedFilterRadioButton: string = 'all'
}
