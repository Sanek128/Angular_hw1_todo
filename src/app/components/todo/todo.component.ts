import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { IToDo } from "../../models/todo.model"
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  toDo: IToDo[] = [];

  constructor(private TodoService: TodoService) {
    this.TodoService.getToDo().subscribe(firebaseToDo => {
      console.log(firebaseToDo);
      let id = 1;
      for (const key in firebaseToDo) {
        // this.toDo.push(firebaseToDo[key])
        this.toDo.push({id: id, ...firebaseToDo[key]});
        id++;
      }
      console.log(this.toDo)
    })
  }

  ngOnInit(): void {
  }

}