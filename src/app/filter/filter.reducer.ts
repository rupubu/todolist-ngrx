import * as fromFilter from './filter.actions';

const initialState: fromFilter.validFilter = 'all';

export function filterReducer(
  state = initialState,
  action: fromFilter.actions
): fromFilter.validFilter {
  switch (action.type) {
    case fromFilter.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}
