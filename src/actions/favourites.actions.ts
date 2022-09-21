import { Action, ActionCreator } from "@reduxjs/toolkit";
import Character from "../componentes/types/character.types";

export interface ToggleFavourites extends Action{
    type: "TOGGLE_FAVORITO";
    character: Character;
}

export interface CleanFavourites extends Action{
    type: "CLEAN_FAVORITOS";
}

export const toggleFavourites: ActionCreator<ToggleFavourites> = (character: Character) => {
    return{
        type: "TOGGLE_FAVORITO",
        character: character,
    };
};

export const cleanFavourites: ActionCreator<CleanFavourites> = () => {
    return{
        type: "CLEAN_FAVORITOS"
    };
};

export type FavouritesActions =
    | ReturnType<typeof toggleFavourites>
    | ReturnType<typeof cleanFavourites>;