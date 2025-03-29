import {createStore,applyMiddleware , combineReducers} from 'redux'
import {thunk} from 'redux-thunk'
import CounterReducer from './CounterReducer'
import EmplyeeReducer from './EmployeeReducer';
import {loadState,saveState} from '../assets/utils/localstorage';

let employes = loadState();

const store = createStore(combineReducers({
    counter : CounterReducer,
    employee : EmplyeeReducer
},employes,applyMiddleware(thunk)));

store.subscribe(()=>{
    store.getState(saveState)
});

export default store;