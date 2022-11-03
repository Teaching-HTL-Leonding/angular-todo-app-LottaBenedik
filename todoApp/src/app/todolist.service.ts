import { Injectable } from '@angular/core';

export class TodoItem{
  constructor(
    public description: string,
    public assignedPerson = "Not Assigned yet",
    public isDone = false
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  title = 'todoApp';

  //varible that holds the task to be edited
  public taskToEdit: TodoItem;

  //variable that holds the list of people to assign a task to
  public peopleList: string[] = ["All", "Not Assigned yet", "Lotta", "Lea"];

  public todoList: TodoItem[]=[
    new TodoItem("homework 1","Lotta", true),
    new TodoItem("homework 2","Lea"),
    new TodoItem("homework 3"),
    new TodoItem("homework 4","Lotta"),
    new TodoItem("homework 5","Lea"),
  ]

  public addingNewTask(newTask:TodoItem){
    this.todoList.push(newTask);
    if(!this.peopleList.includes(newTask.assignedPerson)){
      this.peopleList.push(newTask.assignedPerson);
    }
  }

  //method that deletes a task from the list parameter: task to be deleted
  public deleteTask(task: TodoItem){
    this.todoList.splice(this.todoList.indexOf(task),1);
  }

  public editTask(task: TodoItem){
    this.taskToEdit = task;
  }
  public getTaskToEdit(){
    return this.taskToEdit;
  }
  public getPeopleList(){
    return this.peopleList;
  }

  public getTodoList(person: string, status: string): TodoItem[]{

    if(person == "All" && status === "Done"){
      return this.todoList.filter(task => task.isDone === true);
    }

    if(person == "All" && status === "Not Done"){
      return this.todoList.filter(task => task.isDone === false);
    }

    if(person != "All" && status === "All"){
      return this.todoList.filter(task => task.assignedPerson === person);
    }

    if(person != "All" && status === "Done"){
      return this.todoList.filter(task => task.assignedPerson === person && task.isDone === true);
    }

    if(person != "All" && status === "Not Done"){
      return this.todoList.filter(task => task.assignedPerson === person && task.isDone === false);
    }

    return this.todoList;
  }

  constructor() {
    this.taskToEdit = new TodoItem("");
  }
}
