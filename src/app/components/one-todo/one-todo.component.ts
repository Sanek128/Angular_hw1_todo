import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { IToDo } from "../../models/todo.model";
import { TodoService } from "../../services/todo.service";


@Component({
  selector: 'app-one-todo',
  templateUrl: './one-todo.component.html',
  styleUrls: ['./one-todo.component.css']
})
export class OneTodoComponent implements OnInit {
  @Input() toDo: IToDo
  
  constructor(private TodoService: TodoService) { }

  // delToDo (id: string, task: string): void {
  delToDo (id: number): void {
    this.TodoService.delToDo(id).subscribe();
    console.log(id);
    this.toDo = [];

  }

  ngOnInit(): void {
  }

}
