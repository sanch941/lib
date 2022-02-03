import { homeReducer } from '@pages/home/model';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    home: homeReducer
});

type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;
