import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option-field',
  templateUrl: './option-field.component.html',
  styleUrls: ['./option-field.component.css'],
})
export class OptionFieldComponent {
  @Input() label: string = '';
  @Input() options: { value: string; label: string }[] = [];
  @Output() selectedValueChange = new EventEmitter<string>();
  @Input() selectedValue: string = '';
  hasError: boolean = false;
  errorMessage: string = 'S\'il vous plait ne choisit pas';

  onOptionChange() {
    this.selectedValueChange.emit(this.selectedValue);
    if(this.selectedValue==='2'){
      this.hasError = true;
    }
    else{
      this.hasError = false;
    }
  }
}