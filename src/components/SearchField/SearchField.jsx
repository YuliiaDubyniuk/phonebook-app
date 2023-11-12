import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/contactsSelectors';
import css from './SearchField.module.css';

export const SearchField = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);
  return (
    <form className={css.searchForm}>
      <label className={css.searchLabel}>
        <span>Find contacts by name</span>
        <input
          className={css.searchInput}
          type="text"
          name="filter"
          value={filterValue}
          onChange={evt => dispatch(setFilter(evt.target.value))}
        />
      </label>
    </form>
  );
};
