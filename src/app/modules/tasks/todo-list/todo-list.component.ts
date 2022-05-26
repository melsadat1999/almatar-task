import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BrowserDbService } from 'src/shared/services/browser-db.service';
import { Task } from 'src/shared/models/task.interface'
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: any[] = [];
  groupList: any[] = [];
  todoSelected: Task[] = [];
  filterForm:FormGroup = new FormGroup({});
  constructor(private browserDbService: BrowserDbService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getTodoList();
    this.initializeFilterForm();
  }

  initializeFilterForm(){
    this.filterForm = this.fb.group({
      title:[''],
      date:[''],
      group:[''],
    })
  }

  clear(){
    this.filterForm.reset();
    this.getTodoList()
  }
 
  filterList(){
    let tasks = this.browserDbService.getItem('todo-list');
    let filterResults = [];
    const filter = this.filterForm.value;
    for (let prop in filter) {
      
      if (filter.hasOwnProperty(prop)) {
           for (var i = 0; i < tasks.length; i++) {
              if (tasks[i][prop] === filter[prop]) {
                filterResults.push(tasks[i]);
              }
          }
      }
  }
    if(filterResults.length > 0)
    this.getTodoList(filterResults)
  }

  getTodoList(filterResults?:any) {
    let tasks = filterResults || this.browserDbService.getItem('todo-list')
    let groups: any = {};
    if (!tasks) return;
    tasks.map((task: Task) => {
      if (groups[task.group])
        groups[task.group] = [...groups[task.group], task]
      else
        groups[task.group] = [task]
    });
    this.todoList = Object.keys(groups);
    this.groupList = groups;
  }


  selectedTask(task: Task) {
    if (this.todoSelected.includes(task))
      this.todoSelected.splice(this.todoSelected.indexOf(task), 1);
    else
      this.todoSelected.push(task);
  }
  
  deleteItem(item:Task){
    const todoList = this.browserDbService.getItem('todo-list');
    const notSelected =  todoList.filter((task:Task) => {
      return !Boolean(task.id == item.id)
     });
     this.browserDbService.setItem('todo-list',notSelected);
     this.getTodoList();
  }

  deleteSelectedItems(){
   const todoList = this.browserDbService.getItem('todo-list');
   const notSelected =  todoList.filter((task:Task) => {
    return !Boolean(this.todoSelected.find(item => item.id == task.id))
   });
   this.browserDbService.setItem('todo-list',notSelected);
   this.getTodoList();
  }
}
