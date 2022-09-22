
import { Reducer } from '@reduxjs/toolkit';
import { FavouritesActions } from '../actions/favourites.actions';
import Character from '../componentes/types/character.types';

export interface FavoritesState {
  favouritesMap: Character[];
}

const initialState: FavoritesState = {
  favouritesMap: [],
};

const favouritesReducer: Reducer<FavoritesState, FavouritesActions> = (
  state = initialState,
  action
): FavoritesState => {
  switch (action.type) {
    case 'TOGGLE_FAVORITO':
      let map = state.favouritesMap;

      const foundFav = map.some((charac) => charac.id === action.character.id);

      foundFav
        ? (map = state.favouritesMap.filter(
            (charac) => charac.id !== action.character.id
          ))
        : map.push(action.character);

      return {
        ...state,
        favouritesMap: map,
      };
    case 'CLEAN_FAVORITOS':
      return {
        favouritesMap: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default favouritesReducer;
