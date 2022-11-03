import { Component, OnInit } from '@angular/core';
import { TodoItem, TodoListComponent } from '../todo-list/todo-list.component';
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-adding-new-page',
  templateUrl: './adding-new-page.component.html',
  styleUrls: ['./adding-new-page.component.css']
})
export class AddingNewPageComponent{

  public newItem: TodoItem;

  constructor(public todoList: TodolistService){

    this.newItem = new TodoItem('');
  }

  public saveNewTask(){

    //write new item on console
    console.log(this.newItem);

    this.todoList.addingNewTask(this.newItem);
  }

}

