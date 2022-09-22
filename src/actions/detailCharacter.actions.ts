import { Action, ActionCreator } from "@reduxjs/toolkit";
import Character from "../componentes/types/character.types";

interface SelectedCharacterAction extends Action{
    type: "SELECCIONAR_PERSONAJE";
    selectedCharacter: Character;
};

export const selectedCharacterAction : ActionCreator<SelectedCharacterAction> = (selectedCharacter: Character) => {
    return{
        type: "SELECCIONAR_PERSONAJE",
        selectedCharacter: selectedCharacter,
    }
};

export type SelectedCharacterActions = ReturnType<typeof selectedCharacterAction>