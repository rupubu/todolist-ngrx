export const SET_FILTER = '[Filter] Set filter';

export type validFilter = 'all' | 'active' | 'completed';

export class SetFilterAction {
  readonly type = SET_FILTER;
  constructor(public filter: validFilter) {}
}

export type actions = SetFilterAction;
