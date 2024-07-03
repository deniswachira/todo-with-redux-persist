import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value: number;
    status: "idle" | "loading" | "failed";
    }

const initialState = {
    value: 0,
    status: "idle",
    };
// The createSlice function generates a slice object that contains the initial state, reducer functions, and action creators.
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value+= 1
        },
        decrement: (state) => {
            state.value-=1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }, // PayloadAction is a generic type that takes the type of the action payload as a type argument.
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer; //register the reducer with the store in the store.ts file.