import { SearchPersonajeAction } from "../actions/personajes.actions";
import Character from "../componentes/types/character.types";


interface PersonajesState{
    search: string;
    personajes: Character[];
}

const initialState = {
    search: '',
    personajes: []
}

const personajesReducer = (state: PersonajesState = initialState, action: SearchPersonajeAction)=>{
    switch (action.type) {
        case "BUSCAR_PERSONAJE":
            return {...state, search: action.payload};
        default:
            return{ ...state};
    }
};

export default personajesReducer