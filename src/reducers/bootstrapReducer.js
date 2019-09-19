import {
    FETCH_DB_DATA_START,
    FETCH_DB_DATA_ERROR,
    SET_CLOTHES_LIST
} from '../actions/types';

const initialState = {
    fetchDbDataStarted: true,
    fetchDbDataError: '',
    clothesList: [],
};

export const bootstrapReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DB_DATA_START:
            return {
                ...state,
                fetchDbDataStarted: action.payload
            };
        case FETCH_DB_DATA_ERROR:
            return {
                ...state,
                fetchDbDataError: action.payload
            };
        case SET_CLOTHES_LIST:
            return {
                ...state,
                clothesList: action.payload
            };
        default:
            return {
                ...state
            };
    }
};