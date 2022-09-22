import { Reducer } from "@reduxjs/toolkit";
import { SelectedCharacterActions } from "../actions/detailCharacter.actions";
import Character from "../componentes/types/character.types"

export interface SelectedCharacterState{
    selectedCharacter: Character | null;
};

const initialState : SelectedCharacterState = {
    selectedCharacter: null,
}

const selectedCharacterReducer : Reducer<SelectedCharacterState,SelectedCharacterActions>= (state = initialState, action) => {
    switch (action.type) {
        case "SELECCIONAR_PERSONAJE":
            return{
                ...state,
                selectedCharacter: action.selectedCharacter,
            }
        default:
            return{
                ...state
            }
    }
};

export default selectedCharacterReducer;