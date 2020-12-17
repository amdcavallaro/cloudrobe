import {
    FETCH_DB_DATA_START,
    FETCH_DB_DATA_ERROR,
    SET_CLOTHES_LIST
} from './types';

import { firebaseReference } from '../services/Firebase/firebaseService';

export const fetchDbDataStart = payload => ({
    type: FETCH_DB_DATA_START,
    payload
});

export const fetchDbDataError = payload => ({
    type: FETCH_DB_DATA_ERROR,
    payload
});

export const setClothesList = payload => ({
    type: SET_CLOTHES_LIST,
    payload
});

export const bootstrapAction = () => dispatch => {
    dispatch(fetchDbDataStart(true));

    firebaseReference.on('value', snapshot => {
        snapshot.forEach(data => {
            dispatch(setClothesList(data.val()));
        });
    });

    dispatch(fetchDbDataStart(false));
};
