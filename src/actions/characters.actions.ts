import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import DataAPI from "../componentes/types/data.types";
import { getCharactersAPI } from "../services/characters.services";
import { IRootState } from "../store/store";

export interface SearchCharactersAction extends Action{
    type: "BUSCAR_PERSONAJES";
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

export interface SearchCharactersThunkAction extends ThunkAction<void, IRootState, unknown, CharactersActions>{};

const searchCharacters : ActionCreator<SearchCharactersAction> = () => {
    return{
        type: "BUSCAR_PERSONAJES",
    }
}

const searchCharactersSucess: ActionCreator<SearchCharactersSucessAction> = (data : DataAPI) => {
    return{
        type: "BUSCAR_PERSONAJES_SUCCESS",
        payload:{
            data: data
        }
    }
}

const searchCharactersError : ActionCreator<SearchCharactersErrorAction> = (error: string) => {
    return{
        type: "BUSCAR_PERSONAJES_ERROR",
        payload:{
            error: error
        }
    }
}


export const searchCharactersThunk = (query: string): SearchCharactersThunkAction => {
    return async (dispatch, getstate) => {
            dispatch(searchCharacters(query))
            try {
                const data = await getCharactersAPI(query);
                dispatch(searchCharactersSucess(data))
            } catch (error) {
                const errorMessage = new Error("No se encontró ningun personaje")
                dispatch(searchCharactersError(errorMessage))
            }
    }
};

export type CharactersActions =
    | SearchCharactersAction
    | SearchCharactersSucessAction
    | SearchCharactersErrorAction;