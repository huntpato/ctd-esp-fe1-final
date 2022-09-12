import { SearchPersonajeAction } from "../actions/personajes.actions";
import { Personaje } from "../componentes/types/personaje.types";


interface PersonajesState{
    search: string;
    personajes: Personaje[];
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