import { Action, ActionCreator } from '@ngrx/store';

export enum TodoActionTypes {
  Add = '[Todo Component] Add',
  Remove = '[Todo Component] Remove'
}

export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export class TodoAdd implements ActionEx {
  readonly type = TodoActionTypes.Add;

  constructor(public payload: any) {}
}

export class TodoRemove implements ActionEx {
  readonly type = TodoActionTypes.Remove;

  constructor(public payload: any) {}
}
