
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit} from "@angular/core";
import {Todo} from "../model/Todo";
import {TodoService} from "../service/todo.service";

let _id = 1;
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getAll().subscribe(
      todos => this.todos = todos
    )
  }

  toggleTodo(todo: Todo) {
    todo.complete = !todo.complete;
    this.todoService.updateTodo(todo).subscribe(
      () => {
        this.ngOnInit()
      }
    )
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        // id: _id++,
        content: value,
        complete: false
      };
      this.todoService.addNew(todo).subscribe(
        () => {
          this.ngOnInit()
          this.content.reset();
        }
      )
    }
  }

  delete(todo: Todo) {
    this.todoService.delete(todo).subscribe(
      () => {
        this.ngOnInit()
      }
    )
  }
}
