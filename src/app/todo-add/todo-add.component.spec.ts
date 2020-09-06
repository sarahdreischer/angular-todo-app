import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { TodoAddComponent } from './todo-add.component';
import { By } from '@angular/platform-browser';

describe('TodoAddComponent', () => {
  let component: TodoAddComponent;
  let fixture: ComponentFixture<TodoAddComponent>;

  let store: MockStore;
  const initialState = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoAddComponent ],
      providers: [ provideMockStore({ initialState }) ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('input element should be blank', () => {
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputElement.value).toBe('');
  });

  it('user can type anything into box', () => {
    const testWord: String = 'test123-:;%$£ üéf';
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.value = testWord;
    inputElement.dispatchEvent(new Event('input'));
    expect(inputElement.value).toBe(testWord);
  });

  it('should call the addTodo method', () => {
    // 1. Dispatch text to input box
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.value = 'test';
    inputElement.dispatchEvent(new Event('input'));

    // 2. Click 'Add' button
    spyOn(component, 'addTodo');
    const addButton = fixture.debugElement.query(By.css('button')).nativeElement;
    addButton.click();
    expect(component.addTodo).toHaveBeenCalled();
  });
});
