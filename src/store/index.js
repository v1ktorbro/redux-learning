import { createStore, combineReducers } from 'redux';
import { cashReducer } from './cashReduser';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducers = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

export const store = createStore(rootReducers, composeWithDevTools());