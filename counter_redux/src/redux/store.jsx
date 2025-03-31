import { createStore, applyMiddleware, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import CounterReducer from './CounterReducer'
import EmplyeeReducer from './EmployeeReducer';
import { loadState, saveState } from '../utils/localstorage';

let employes = loadState();

const store = createStore(combineReducers({
    counter: CounterReducer,
    employee: EmplyeeReducer
}),
    employes,
    applyMiddleware(thunk));

store.subscribe(() => {
    saveState(store.getState())
});

export default store;