import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrl: './data-show.component.css'
})
export class DataShowComponent {
  @Input() data: {
      title: string;
      task: string;
      unityType: string;
      name: string;
      subtasks: { completed: boolean; description: string }[];
  } = {
      title: '',
      task: '',
      unityType: '',
      name: '',
      subtasks: [],
  };
}
