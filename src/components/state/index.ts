import { AppState as FlexAppState } from '@twilio/flex-ui';
import { combineReducers, Action as ReduxAction } from 'redux';

import { CustomTaskListState, reduce as CustomTaskListReducer } from './CustomTaskListState';

// Register your redux store under a unique namespace
export const namespace = 'test-plugin';

// Extend this payload to be of type that your ReduxAction is
export interface Action extends ReduxAction {
  payload?: any;
  type: string;
}

// Register all component states under the namespace
export interface AppState {
  flex: FlexAppState;
  'xcelerate-develop': {
    customTaskList: CustomTaskListState;
    // Other states
  };
}

// Combine the reducers
export default combineReducers({
  customTaskList: CustomTaskListReducer,
});
