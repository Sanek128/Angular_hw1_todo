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
  delTodo(id: number, task: string): void {
    console.log(id);

    this.toDo.splice(this.toDo.findIndex(value => value.id === id),1);
    console.log(id);

    // this.TodoService.delToDo(id).subscribe(value => value, err => console.log(err));
    // this.TodoService.delToDo(id).subscribe();
    this.TodoService.delToDo(task).subscribe();
    // this.TodoService.delToDo;
    console.log(task);
    console.log(id);


    }
  // delToDo(id: number){
  //   this.TodoService.delToDo(id);
  //   this.toDo.splice(this.toDo.findIndex(value => value.id === id),1);
  //   }

  ngOnInit(): void {
  }

}
