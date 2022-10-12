import { Action } from '.';


export interface CustomTaskListState {
  loaded: boolean;
}

const initialState: CustomTaskListState = {
  loaded: false
};

export class Actions {
}

export function reduce(state: CustomTaskListState = initialState, action: Action): CustomTaskListState {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    default:
      return state;
  }
}
