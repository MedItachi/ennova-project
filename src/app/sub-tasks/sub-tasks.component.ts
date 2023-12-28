import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sub-tasks',
  templateUrl: './sub-tasks.component.html',
  styleUrl: './sub-tasks.component.css'
})
export class SubTasksComponent {
  @Input() subtask: { completed: boolean; description: string } = { completed: false, description: '' };
  @Output() deleteSubtask = new EventEmitter<void>();
  onDeleteSubtask() {
    this.deleteSubtask.emit();
  }
}
