import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cashReducer } from './cashReduser';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));