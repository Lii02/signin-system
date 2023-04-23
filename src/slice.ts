import { createSlice } from '@reduxjs/toolkit';
import { SignInData } from './types';

const log: SignInData[] = [];

export const slice = createSlice({
    name: "signin",
    initialState: log,
    reducers: {
        addSignIn: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addSignIn } = slice.actions;

export default slice.reducer;