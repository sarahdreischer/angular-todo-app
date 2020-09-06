import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { Store, select } from '@ngrx/store';
import { TodoRemove } from '../todo.actions';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss']
})
export class TodoViewComponent implements OnInit {

  todos: Observable<Todo[]>;

  constructor(private store: Store<{ todos: Todo[] }>) {
    this.todos = store.pipe(select('todos'));
  }

  ngOnInit(): void {
  }

  removeTodo(todoIndex) {
    this.store.dispatch(new TodoRemove(todoIndex));
  }
}
