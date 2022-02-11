import {
    ActionReducerMapBuilder,
    AsyncThunk,
    isAsyncThunkAction
} from '@reduxjs/toolkit';

export const builderLoadingMatcher = (
    builder: ActionReducerMapBuilder<any>,
    thunks: { [key: string]: AsyncThunk<unknown, unknown, unknown> } = {}
) => {
    const thunksArr = Object.values(thunks).map((thunk) => thunk);

    builder.addMatcher(
        isAsyncThunkAction.apply(null, thunksArr),
        (state, action) => {
            Object.keys(thunks).forEach((thunkName) => {
                if (action.type.includes(thunkName)) {
                    state[`${thunkName}Loading`] = action.type.endsWith(
                        '/pending'
                    );
                }
            });
        }
    );
};
