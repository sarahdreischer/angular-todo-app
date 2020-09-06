import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { TodoAddComponent } from './todo-add/todo-add.component';

import { TodoReducer } from './todo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TodoViewComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ todos: TodoReducer }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
