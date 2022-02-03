import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { rootReducer, AppStateType } from './root-reducer';
import { setupAxios } from '../lib/axios';
import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        })
});

export const persistor = persistStore(store);

setupAxios();
