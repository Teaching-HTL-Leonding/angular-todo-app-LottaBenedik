import { Component, OnInit } from '@angular/core';
import { AddingNewPageComponent } from '../adding-new-page/adding-new-page.component';
import { TodolistService } from '../todolist.service';

export class TodoItem{
  constructor(
    public description: string,
    public assignedPerson = "Not Assigned yet",
    public isDone = false
  ){}
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})


export class TodoListComponent{

  selectedPerson: string = "All";
  selectedStatus: string = "All";
  constructor(public todoListService: TodolistService){

  }

  public peopleList(): string[]{
    return this.todoListService.getPeopleList();
  }


  public deleteTask(task: TodoItem){
    this.todoListService.deleteTask(task);
  }

  public editTask(task: TodoItem){
    this.todoListService.editTask(task);
  }

  public getTodoList(person: string, status: string ): TodoItem[]{
    return this.todoListService.getTodoList(person, status);
  }




}
