import { FC } from 'react';
import { useSelector } from '../../store/store';
import { useDispatch } from 'react-redux';
import { toggleFavourites } from '../../actions/favourites.actions';
import Character from '../types/character.types';
import star from '../../imagenes/star.png';
import starFilled from '../../imagenes/star-filled.png';
import './boton-favorito.css';

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * @returns un JSX element
 */

export interface BotonFavoritoProps{
  character: Character
}

const BotonFavorito : FC<BotonFavoritoProps> = ({ character }: BotonFavoritoProps) => {

  const favs = useSelector((state) => state.fav.favouritesMap);
  const dispatch = useDispatch();

  const foundFav = favs.some((char) => char.id === character.id);

  const handleToggle = () => {
    dispatch(toggleFavourites(character));
  };

  return (
    <div className="boton-favorito">
      {foundFav ? (
        <img
          src={starFilled}
          alt={"favorito"}
          onClick={handleToggle} 
        />
      ) : (
        <img 
          src={star} 
          alt={"favorito"}
          onClick={handleToggle} 
        />
      )}
    </div>
  );
};

export default BotonFavorito;
