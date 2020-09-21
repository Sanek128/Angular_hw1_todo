import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { IToDo } from "../models/todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getToDo(): Observable <IToDo[]> {
    return this.http.get <IToDo[]> ('https://hw-3-vue-firebase.firebaseio.com/myToDoList.json')
  }
}
