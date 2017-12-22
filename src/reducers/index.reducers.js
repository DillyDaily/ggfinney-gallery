import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import items from './items.reducers';

const rootReducer = combineReducers({ 
    form: formReducer,
    items
});

export default rootReducer;