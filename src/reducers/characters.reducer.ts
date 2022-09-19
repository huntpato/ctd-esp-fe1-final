
import { Reducer } from "@reduxjs/toolkit";
import { CharactersActions } from "../actions/characters.actions";
import DataAPI from "../componentes/types/data.types";


export interface CharacterState{
    status: "IDLE" | "LOADING" | "COMPLETED";
    data: DataAPI;
    error: string | null;
}

const initialState : CharacterState = {
    status: "IDLE",
    data:{ info: {next: "", prev: ""}, results:[], error: ""},
    error: null
}

const charactersReducer : Reducer<CharacterState, CharactersActions> = (state = initialState, action) => {
    switch (action.type) {
        case "BUSCAR_PERSONAJES":
            return {
                ...state,
                status: "LOADING",
                data:{ info: {next: "", prev: ""}, results:[],error:""},
                error: null
            }
        case "BUSCAR_PERSONAJES_SUCCESS":
            return{
                ...state,
                status: "COMPLETED",
                data: action.payload.data,
            }
        case "BUSCAR_PERSONAJES_ERROR":
            return{
                ...state,
                status: "COMPLETED",
                error: action.payload.error
            }
        default:
            return{ ...state};
    }
};

export default charactersReducer;