import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { DatepickerModule } from 'src/shared/components-shared/datepicker/datepicker.module';
import { FieldModule } from 'src/shared/components-shared/field/field.module';
 import { SelectModule } from 'src/shared/components-shared/select/select.module';
import { TextAreaModule } from 'src/shared/components-shared/text-area/text-area.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/shared/directives/directives.module';



@NgModule({
  declarations: [
    TodoListComponent,
    AddTodoComponent,
    TodoDetailsComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    DatepickerModule,
    FieldModule,
    SelectModule,
    TextAreaModule,
    ReactiveFormsModule,
    DirectivesModule
  ]
})
export class TasksModule { }
