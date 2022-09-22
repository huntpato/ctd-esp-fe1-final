import { useSelector } from '../store/store';
import { useEffect, useState } from 'react';
import { getEpisodesAPI } from '../services/characters.services';
import Episode from '../componentes/types/episode.types';
import BotonFavorito from '../componentes/botones/boton-favorito.componente';
import TarjetaEpisodio from '../componentes/episodios/tarjeta-episodio.componente';
import './Detalle.css';

/**
 * pagina de detalle.
 * Aqui se muestra la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 *
 * @returns la pagina de detalle
 */

const PaginaDetalle = () => {
  const { selectedCharacter } = useSelector((state) => state.selected);
  const [arrayEpisodes, setArrayEpisodes] = useState<Episode[]>([]);

  /**
   * Función que mapea todos los episodios en los que estuvo el personaje, por cada episodio obtiene el id
   * y devuelve un string con todos los ids de los episodios, que será utilizado para pedir a la API la info
   * de los mismos
   * @returns {string} string con todos los numeros de los ids de los episodios
   */
  const getEpisodes = () => {
    const episodeIDs = selectedCharacter?.episode.map((episode) => {
      return episode.split('/').at(-1);
    });
    return episodeIDs?.join(',');
  };

  useEffect(() => {
    const stringEpisodes = getEpisodes();
    stringEpisodes &&
      getEpisodesAPI(stringEpisodes).then((data) => setArrayEpisodes(data));
  }, []);

  if (!selectedCharacter)
    return (
      <div className={'detalle-header-texto-fail'}>
        Seleccione un personaje para ver el detalle
      </div>
    );

  return (
    <div className="container">
      <h3>{selectedCharacter?.name}</h3>
      <div className={'detalle'}>
        <div className={'detalle-header'}>
          <img src={selectedCharacter?.image} alt={selectedCharacter?.name} />
          <div className={'detalle-header-texto'}>
            <p>{selectedCharacter?.name}</p>
            <p>Planeta: {selectedCharacter?.origin?.name}</p>
            <p>Genero: {selectedCharacter?.gender}</p>
          </div>
          <BotonFavorito character={selectedCharacter} />
        </div>
      </div>
      <h4>Lista de episodios donde apareció el personaje</h4>
      <div className={'episodios-grilla'}>
        {arrayEpisodes?.map((episode) => {
          return (
            <TarjetaEpisodio
              key={episode.id}
              episode={episode.episode}
              date={episode.air_date}
              name={episode.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PaginaDetalle;
