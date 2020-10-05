import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';
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
      // let idForDel;
      for (const key in firebaseToDo) {
        console.log('key', key);
        console.log(firebaseToDo[key]);
        // this.toDo.push(firebaseToDo[key])
        this.toDo.push({id: id, idForDel: key, ...firebaseToDo[key]});
        id++;
        // idForDel = key;
        // return idForDel;
      }
      console.log(this.toDo)
    })
  }
  delTodo(id: number, task: string, idForDel: string): void {
    console.log('id', id);
    console.log('idForDel', idForDel);


    this.toDo.splice(this.toDo.findIndex(value => value.id === id),1);
    console.log('id', id);

    // this.TodoService.delToDo(idForDel).subscribe(value => value, err => console.log(err));
    // this.TodoService.delToDo(id).subscribe();
    this.TodoService.delToDo(idForDel).subscribe();
    // this.TodoService.delToDo;
    console.log('idForDel', idForDel);
    console.log('task', task);
    console.log('id', id);


    }
  // delToDo(id: number){
  //   this.TodoService.delToDo(id);
  //   this.toDo.splice(this.toDo.findIndex(value => value.id === id),1);
  //   }

  ngOnInit(): void {
  }

}
