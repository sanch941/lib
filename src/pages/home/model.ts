import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    welcomeText: ' This is home page'
};

export const { reducer, actions } = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setHomePage(state) {
            state.welcomeText = 'Text changed by redux toolkit';
        }
    }
});

export const homeActions = actions;
export const homeReducer = reducer;
