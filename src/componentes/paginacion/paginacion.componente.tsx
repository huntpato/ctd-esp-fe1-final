import { useDispatch } from 'react-redux';
import { searchCharactersThunk } from '../../actions/characters.actions';
import { useSelector } from '../../store/store';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 *
 * @returns un JSX element
 */

const Paginacion = () => {
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  /**
   * Función que se ejecuta al hacer click sobre el botón anterior
   * y dispara el dispatch
   */

  const handlePrevPage = () => {
    if (data.info.prev !== undefined) {
      dispatch(searchCharactersThunk(data.info.prev));
    }
  };

   /**
   * Función que se ejecuta al hacer click sobre el botón siguiente
   * y dispara el dispatch
   */

  const handleNextPage = () => {
    if (data.info.next !== undefined) {
      dispatch(searchCharactersThunk(data.info.next));
    }
  };

  return (
    <div className="paginacion">
      <button
        disabled={data?.info?.prev === null || undefined}
        className={'primary'}
        onClick={handlePrevPage}
      >
        Anterior
      </button>
      <button
        disabled={data?.info?.next === null || undefined}
        className={'primary'}
        onClick={handleNextPage}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
