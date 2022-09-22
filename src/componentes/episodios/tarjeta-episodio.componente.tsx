import { FC } from 'react';
import './tarjeta-episodio.css';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje detalle.
 *
 * @returns un JSX element 
 */

export interface TarjetaEpisodioProps{
    episode: string;
    date: string;
    name: string;
}

const TarjetaEpisodio : FC<TarjetaEpisodioProps> = ({episode, date, name}) => {

    return <div className="tarjeta-episodio">
            <h4>{name}</h4>
            <div>
                <span>Episodio nº: {episode}</span>
                <span>Lanzado el: {date}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;