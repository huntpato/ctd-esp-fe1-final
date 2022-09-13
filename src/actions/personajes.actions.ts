import { ActionCreator } from "@reduxjs/toolkit";

export type SearchPersonajeAction = {
    type: "BUSCAR_PERSONAJE";
    payload: string;
}

export const searchPersonaje : ActionCreator<SearchPersonajeAction> = ( name: string ) => {
    return{
        type: "BUSCAR_PERSONAJE",
        payload: name
    };
}
