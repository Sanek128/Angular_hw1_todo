import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from "./components/home/home.component";
import { TodoComponent } from "./components/todo/todo.component"

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'todolist', component: TodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
