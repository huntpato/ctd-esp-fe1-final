import { Reducer } from 'react';
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

      if (foundFav) {
        map = state.favouritesMap.filter(
          (charac) => charac.id !== action.character.id
        );
      } else {
        map.push(action.character);
      }

      return { 
        ...state,
        favouritesMap: map,
        };
    case 'CLEAN_FAVORITOS':
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};

export default favouritesReducer;
