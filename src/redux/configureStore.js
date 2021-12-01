import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";

export const configureStore = () => {
    const store = createStore(
        Reducer, // reducer
        initialState // our defined initial state
    )

    return store;
}