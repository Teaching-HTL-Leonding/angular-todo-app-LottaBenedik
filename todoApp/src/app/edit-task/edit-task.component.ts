import { Component, OnInit } from '@angular/core';
import { TodoItem, TodoListComponent } from '../todo-list/todo-list.component';
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  public taskToEdit: TodoItem;
  constructor(public todoList: TodolistService) {
    this.taskToEdit = todoList.getTaskToEdit();
  }

}
