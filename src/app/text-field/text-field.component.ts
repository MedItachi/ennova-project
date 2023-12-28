import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent {
  @Input() label: string='';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  
  onValueChange() {
    this.valueChange.emit(this.value);
  }
  
}