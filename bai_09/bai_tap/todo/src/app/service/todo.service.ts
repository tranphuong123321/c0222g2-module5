import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../model/Todo";

const URL = " http://localhost:3000/todos"
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Todo[]>{
    return this.http.get<Todo[]>(URL);
  }
  addNew(todo): Observable<Todo>{
    return this.http.post<Todo>(URL,todo);
  }
  updateTodo(todo): Observable<Todo>{
    return this.http.put<Todo>(URL+"/"+todo.id,todo);
  }
  delete(todo): Observable<Todo>{
    return this.http.delete<Todo>(URL+"/"+todo.id);
  }
}
