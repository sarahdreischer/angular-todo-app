import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { TodoAdd } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  todos: Observable<Todo[]>;

  constructor(private store: Store<{ todos: Todo[] }>) {
    this.todos = store.pipe(select('todos'));
  }

  ngOnInit(): void {
  }

  addTodo(description: String) {
    const todo = new Todo();
    todo.description = description;

    this.store.dispatch(new TodoAdd(todo));
  }

}
