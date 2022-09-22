import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { getCharactersAPI } from "../services/characters.services";
import { IRootState } from "../store/store";
import DataAPI from "../componentes/types/data.types";

export interface SearchCharactersAction extends Action{
    type: "BUSCAR_PERSONAJES";
    query: string;
}
export interface SearchCharactersSucessAction extends Action{
    type: "BUSCAR_PERSONAJES_SUCCESS";
    payload:{
        data: DataAPI;
    }
}
export interface SearchCharactersErrorAction extends Action{
    type: "BUSCAR_PERSONAJES_ERROR";
    payload:{
        error: string;
    }
}

const searchCharacters: ActionCreator<SearchCharactersAction> = (query: string) => {
    return{
        type: "BUSCAR_PERSONAJES",
        query: query,
    }
};

const searchCharactersSucess: ActionCreator<SearchCharactersSucessAction> = (data : DataAPI) => {
    return{
        type: "BUSCAR_PERSONAJES_SUCCESS",
        payload:{
            data: data
        }
    }
};

const searchCharactersFailed: ActionCreator<SearchCharactersErrorAction> = (error: string) => {
    return {
        type: "BUSCAR_PERSONAJES_ERROR",
        payload:{
            error: error
        }
    }
};

export interface SearchCharactersThunkAction extends ThunkAction<void, IRootState, unknown, CharactersActions>{};

export const searchCharactersThunk = (query: string): SearchCharactersThunkAction => {
    return async (dispatch, getstate) => {
            dispatch(searchCharacters(query))
            try {
                const data = await getCharactersAPI(query);
                dispatch(searchCharactersSucess(data))
            } catch (error) {
                const errorMessage = "no hay personajes"
                dispatch(searchCharactersFailed(errorMessage))
            }
    }
};

export type CharactersActions =
    | SearchCharactersAction
    | SearchCharactersSucessAction
    | SearchCharactersErrorAction;