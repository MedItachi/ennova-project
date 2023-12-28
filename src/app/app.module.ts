import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { OptionFieldComponent } from './option-field/option-field.component';
import { SelectFieldComponent } from './select-field/select-field.component';
import { SubTasksComponent } from './sub-tasks/sub-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DataShowComponent } from './data-show/data-show.component';

@NgModule({
  declarations: [
    FormComponent,
    TextFieldComponent,
    OptionFieldComponent,
    SelectFieldComponent,
    AppComponent,
    SubTasksComponent,
    AddTaskComponent,
    DataShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
