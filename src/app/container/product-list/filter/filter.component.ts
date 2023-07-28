import {Component, EventEmitter, Input, Output} from '@angular/core';

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

  @Output()
  onFilterRadiobuttonChange: EventEmitter<string> = new EventEmitter<string>()

  selectedFilterRadioButton: string = 'all'

  onSelectedFilterRadioButtonChange() {
    this.onFilterRadiobuttonChange.emit(this.selectedFilterRadioButton)
  }
}
