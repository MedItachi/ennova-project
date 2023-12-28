import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.css']
})
export class SelectFieldComponent {
  @Input() label: string='';
  @Input() options: { value: string; label: string }[]=[];
  @Input() selectedValue: string='';
  @Input() hasError: boolean = false;
  @Input() errorMessage: string = '';
  @Output() selectedValueChange = new EventEmitter<string>();

  onSelectionChange() {
    this.selectedValueChange.emit(this.selectedValue);
  }
}
