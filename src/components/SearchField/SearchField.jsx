import { useDispatch, useSelector } from 'react-redux';
import css from './SearchField.module.css';
import { setFilter } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/selectors';

export const SearchField = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);
  return (
  <label className={css.searchLabel}>
    Find contacts by name
    <input
      className={css.searchInput}
      type="text"
      name="filter"
      value={filterValue}
      onChange={(evt)=> dispatch(setFilter(evt.target.value))}
    />
  </label>
);
}