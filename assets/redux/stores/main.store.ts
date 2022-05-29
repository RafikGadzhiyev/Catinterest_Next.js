import { legacy_createStore as CreateStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { MainReducer } from '../reducers/Main.reducer';

export const MainStore = CreateStore(MainReducer, applyMiddleware(thunk));