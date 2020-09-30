import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { IToDo } from "../../models/todo.model";
import { TodoService } from "../../services/todo.service";


@Component({
  selector: 'app-one-todo',
  templateUrl: './one-todo.component.html',
  styleUrls: ['./one-todo.component.css']
})
export class OneTodoComponent implements OnInit {
  @Input() toDo: IToDo;
  
  constructor(private TodoService: TodoService) { }

  // delToDo (id: number): void {
  //   this.TodoService.delToDo(id).subscribe();
  //   console.log(id);
  //   this.toDo = [];
  // }
  
  // delToDo(id: number) {
  // this.TodoService.delToDo(id).subscribe(value => value, error => console.log(error));
  // this.toDo.splice(this.toDo.findIndex(value => value.id === id),1);
  // }
  
  ngOnInit(): void {
  }

}
