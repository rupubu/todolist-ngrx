import { Todo } from './todo/models/todo.model';
import { validFilter } from './filter/filter.actions';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './todo/state/todo.reducer';
import * as fromFilter from './filter/filter.reducer';

export interface AppState {
  todos: Todo[];
  filter: validFilter;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filter: fromFilter.filterReducer
};
