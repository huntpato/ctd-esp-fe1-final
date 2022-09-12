import { useDispatch } from 'react-redux';
import { searchPersonaje } from '../../actions/personajes.actions';
import { useSelector } from '../../store/store';

import './filtros.css';

const Filtros = () => {
  const inputsearch = useSelector((state) => state.personajes.search);
  const dispatch = useDispatch();

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        value={inputsearch}
        onChange={(e) => dispatch(searchPersonaje(e.target.value))}
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
      />
    </div>
  );
};

export default Filtros;
