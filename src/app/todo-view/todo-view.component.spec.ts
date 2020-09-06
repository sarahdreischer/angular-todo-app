import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { TodoViewComponent } from './todo-view.component';
import { Todo } from '../models/todo';
import { By } from '@angular/platform-browser';

describe('TodoViewComponent', () => {
  let component: TodoViewComponent;
  let fixture: ComponentFixture<TodoViewComponent>;
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoViewComponent ],
      providers: [provideMockStore()]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoViewComponent);
    component = fixture.componentInstance;

    let initialTodo = new Todo();
    initialTodo.description = 'test';
    const initialState: { todos: Todo[] } = { todos: [initialTodo] };
    store.setState(initialState);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 items in list', () => {
    const listLength = fixture.debugElement.queryAll(By.css('li')).length;
    expect(listLength).toEqual(1);
  });

  it('should remove item in list', () => {
    const removeButtons = fixture.debugElement.queryAll(By.css('li button'));
    const removeButton = removeButtons[0].nativeElement;
    spyOn(component, 'removeTodo');
    removeButton.click();
    expect(component.removeTodo).toHaveBeenCalled();
  });
});
