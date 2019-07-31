import { combineReducers } from 'redux';
import { clothesReducer } from './clothesReducer';

export default combineReducers({
    clothes: clothesReducer
});