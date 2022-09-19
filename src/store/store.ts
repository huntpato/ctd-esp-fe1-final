import { combineReducers } from "@reduxjs/toolkit";
import { createStore,applyMiddleware } from 'redux';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import charactersReducer from "../reducers/characters.reducer";


const rootReducer = combineReducers({
    data: charactersReducer,
});

// IRootState
export type IRootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)) //middlewares
);