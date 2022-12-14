import { FC, useRef } from "react";
import { useDispatch } from "react-redux";
import { searchCharactersThunk } from "../actions/characters.actions";
import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */

const PaginaInicio : FC = () => {

    const dispatch = useDispatch();
    const filterRef = useRef<HTMLInputElement>(null);

    /**
     * Función que al hacer click en el botón limpia el input de busqueda,
     * y dispara el dispatch para traer todos los personajes iniciales.
     */
    const cleanFilter = () =>{
        if (filterRef.current) {
            filterRef.current.value = "";
            dispatch(searchCharactersThunk("https://rickandmortyapi.com/api/character/"))
        }
    }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={cleanFilter}>Limpiar filtro</button>
        </div>
        <Filtros filterRef={filterRef}/>
        <Paginacion />
        <GrillaPersonajes/>
        <Paginacion />
    </div>
}

export default PaginaInicio