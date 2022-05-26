import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
 
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todo-list' },
  {path:'todo-list',component:TodoListComponent},
  {path:'add-todo',component:AddTodoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
