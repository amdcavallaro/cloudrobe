import { combineReducers } from 'redux';
import { bootstrapReducer } from './bootstrapReducer';

export default combineReducers({
    config: bootstrapReducer
});