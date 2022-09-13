import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import Character from "../componentes/types/character.types";
import { searchCharacterAPI } from "../services/characters.services";
import { IRootState } from "../store/store";

export interface SearchCharactersAction extends Action{
    type: "BUSCAR_PERSONAJE";
    name: string;
}

export interface SearchCharactersSucessAction extends Action{
    type: "BUSCAR_PERSONAJE_SUCCESS";
    characters: Character[];
}

export interface SearchCharactersErrorAction extends Action{
    type: "BUSCAR_PERSONAJE_ERROR";
    error: string;
}

export interface SearchCharactersThunkAction extends ThunkAction<void, IRootState, unknown, SearchCharactersAction | SearchCharactersSucessAction | SearchCharactersErrorAction>{};

const searchCharacters : ActionCreator<SearchCharactersAction> = (search: string) => {
    return{
        type: "BUSCAR_PERSONAJE",
        name: search
    }
}

const searchCharactersSucess: ActionCreator<SearchCharactersSucessAction> = (characters : Character[]) => {
    return{
        type: "BUSCAR_PERSONAJE_SUCCESS",
        characters: characters
    }
}

const searchCharactersError : ActionCreator<SearchCharactersErrorAction> = (error: string) => {
    return{
        type: "BUSCAR_PERSONAJE_ERROR",
        error: error
    }
}

const MINIMUM_CHARS_TO_SEARCH = 3;

export const searchCharactersThunk = (query: string): SearchCharactersThunkAction => {
    return async (dispatch, getstate) => {
            dispatch(searchCharacters(query))
            try {
                const response = await searchCharacterAPI(query);
                dispatch(searchCharactersSucess(response))
            } catch (error) {
                dispatch(searchCharactersError(error))
            }
    }
};

export type CharactersActions =
    | SearchCharactersAction
    | SearchCharactersSucessAction
    | SearchCharactersErrorAction;