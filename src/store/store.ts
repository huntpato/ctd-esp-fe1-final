import { combineReducers } from "@reduxjs/toolkit";
import { createStore,applyMiddleware } from 'redux';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
import thunk from 'redux-thunk'
import charactersReducer from "../reducers/characters.reducer";

// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";

const rootReducer = combineReducers({
    characters: charactersReducer,
});

// IRootState
export type IRootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk) //middlewares
);