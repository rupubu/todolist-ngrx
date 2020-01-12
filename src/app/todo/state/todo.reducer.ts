import * as fromTodo from './todo.action';
import { Todo } from '../models/todo.model';

const todo1 = new Todo('Buy eggs');
const todo2 = new Todo('Call mom');
const todo3 = new Todo('Watch Ricky & Morty');

todo2.completed = true;

const initialState: Todo[] = [todo1, todo2, todo3];

export function todoReducer(
  state = initialState,
  action: fromTodo.Actions
): Todo[] {
  switch (action.type) {
    case fromTodo.ADD_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];
    case fromTodo.TOGGLE_TODO:
      return state.map(editTodo => {
        if (editTodo.id === action.id) {
          return {
            ...editTodo,
            completed: !editTodo.completed
          };
        } else {
          return editTodo;
        }
      });
    case fromTodo.TOGGLE_ALL_TODO:
      return state.map(editTodo => {
        return {
          ...editTodo,
          completed: action.completed
        };
      });
    case fromTodo.EDIT_TODO:
      return state.map(editTodo => {
        if (editTodo.id === action.id) {
          return {
            ...editTodo,
            text: action.text
          };
        } else {
          return editTodo;
        }
      });
    case fromTodo.DELETE_TODO:
      return state.filter(deleteTodo => deleteTodo.id !== action.id);
    case fromTodo.DELETE_ALL_COMPLETED_TODO:
      return state.filter(deleteAllTodo => !deleteAllTodo.completed);
    default:
      return state;
  }
}
