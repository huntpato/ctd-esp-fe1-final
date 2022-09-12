export type SearchPersonajeAction = {
    type: "BUSCAR_PERSONAJE";
    payload: string;
}

export const searchPersonaje = ( name: string ) : SearchPersonajeAction => {
    return{
        type: "BUSCAR_PERSONAJE",
        payload: name
    };
}
