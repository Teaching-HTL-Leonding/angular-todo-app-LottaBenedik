import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddingNewPageComponent } from './adding-new-page/adding-new-page.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'todo-list'},
  {path: 'todo-list', component: TodoListComponent},
  {path: 'adding-new', component: AddingNewPageComponent},
  {path: 'edit', component: EditTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
