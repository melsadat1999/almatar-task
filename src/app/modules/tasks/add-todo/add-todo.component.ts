import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserDbService } from 'src/shared/services/browser-db.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  taskForm:FormGroup = new FormGroup({});
  constructor(private browserDbService:BrowserDbService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
     this.initializeTaskForm();
  }

  initializeTaskForm(){
   this.taskForm = this.fb.group({
    title:['',Validators.required],
     group:['',Validators.required],
     description:['',Validators.required],
     date:['',Validators.required]
   })
  }


  addTask(){
    const todoList = this.browserDbService.getItem('todo-list');
    if(todoList){
      const newTodoList = [...todoList,{id:Math.random(),...this.taskForm.value}]
      this.browserDbService.setItem('todo-list',newTodoList);
    }
    else
    this.browserDbService.setItem('todo-list',[{id:Math.random(),...this.taskForm.value}]);
    this.router.navigate(['/tasks/todo-list'])
  }


  clear(){
    this.taskForm.reset();
  }


}
