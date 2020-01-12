import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../filter/filter.actions';
import * as fromTodos from '../state/todo.action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  validFilters: fromFilter.validFilter[] = ['all', 'active', 'completed'];
  currentFilter: fromFilter.validFilter;
  leftTasks: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(store => {
      this.currentFilter = store.filter;
      this.leftCounter(store.todos);
    });
  }

  changeFilter(newFilter: fromFilter.validFilter) {
    const action = new fromFilter.SetFilterAction(newFilter);
    this.store.dispatch(action);
  }

  leftCounter(todos: Todo[]) {
    this.leftTasks = todos.filter(todo => !todo.completed).length;
  }

  removeCompleted() {
    const action = new fromTodos.removeAllCompletedAction();
    this.store.dispatch(action);
  }
}
