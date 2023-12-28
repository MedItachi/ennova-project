import { Component } from '@angular/core';

interface TypeForm{
  title: string,
  task: string,
  unityType: string,
  name: string,
  subtasks: { completed: boolean; description: string }[]
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title: string = '';
  task: string = '';
  unityType:string='1';
  name: string = ''
  subtasks: { completed: boolean; description: string }[] = [];
  showDisplayData: boolean = false;
  state: TypeForm = {title:"",task:"",unityType:"",name:"",subtasks:[]}

  tasks: { value: string; label: string }[] = [
    { value: '1', label: 'Non specifique' },
    { value: '2', label: 'Entretien' },
    { value: '3', label: 'Incident' }
  ];
  unityTypes: { value: string; label: string }[] = [
    { value: '1', label: 'Unité' },
    { value: '2', label: 'Building' }
  ];

  names: { value: string; label: string }[] = []
  building = [
    {
      type:"Building",
      id: "B1",
      name: "My Building 1"
    },
    {
      type:"Building",
      id: "B2",
      name: "My Building 2"
    },
    {
      type:"Building",
      id: "B3",
      name: "My Building 3"
    },
  ]
  unit = [
    {
      type:"Unit",
      id: "U1",
      name: "My Unit 1"
    },
    {
      type:"Unit",
      id: "U1",
      name: "My Unit 3"
    },
    {
      type:"Unit",
      id: "U3",
      name: "My Unit 3"
    },
  ]

  handleSelectionChange(newValue: string) {
    this.unityType = newValue;
    if (this.unityType === '2') {
      this.names = this.building.map(item => ({ value: item.id, label: item.name }));
    } else if (this.unityType === '1') {
      this.names = this.unit.map(item => ({ value: item.id, label: item.name }));
    } else {
      this.names = [];
    }
  }

  onTitleChange(changedValue: string){
    this.title = changedValue;
  }

  onSubtasksChange(subtasks: { completed: boolean; description: string }[]) {
    this.subtasks = subtasks;
  }


  onSubmit() {
    this.state={
      title:`${this.title}`,
      task:`${this.task}`,
      unityType:`${this.unityType}`,
      name:`${this.name}`,
      subtasks:{...this.subtasks}
    };
    console.log(this.state)
    this.showDisplayData = true;
  }

  onAddTask() {

  }

  onHideData(event: any) {
    this.showDisplayData = false;
  }

  reset(){
    this.title = this.state.title;
    this.task = this.state.task;
    this.unityType= this.state.unityType;
    this.name = this.state.name;
    this.subtasks = this.state.subtasks;
  }

}
