
import { Reducer } from "@reduxjs/toolkit";
import { CharactersActions } from "../actions/characters.actions";
import Character from "../componentes/types/character.types";


export interface CharacterState{
    search: string;
    status: "LOADING" | "COMPLETED";
    characters: Character[];
    error: string | null;
}

const initialState : CharacterState = {
    search: '',
    status: "COMPLETED",
    characters:[],
    error: null
}

const charactersReducer : Reducer<CharacterState, CharactersActions> = (state = initialState, action) => {
    switch (action.type) {
        case "BUSCAR_PERSONAJE":
            return {
                ...state,
                status: "LOADING",
                search: action.name,
                error: null
            }
        case "BUSCAR_PERSONAJE_ERROR":
            return{
                ...state,
                status: "COMPLETED",
                error: action.error
            }
        case "BUSCAR_PERSONAJE_SUCCESS":
            return{
                ...state,
                status: "COMPLETED",
                characters: action.characters
            }
        default:
            return{ ...state};
    }
};

export default charactersReducer