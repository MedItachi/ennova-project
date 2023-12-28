import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  newTaskDescription: string = '';
  subtasks: { completed: boolean; description: string }[] = [];

  @Output() subtasksChange = new EventEmitter<{ completed: boolean; description: string }[]>();


  onAddTask() {
    this.subtasks.push({ completed: false, description: '' });
    this.emitSubtasks();
  }

  onDeleteSubtask(index: number) {
    this.subtasks.splice(index, 1);
    this.emitSubtasks();
  }

  private emitSubtasks() {
    this.subtasksChange.emit([...this.subtasks]);
  }

  
}