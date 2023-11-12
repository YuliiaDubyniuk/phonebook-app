import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number}) => {
  const dispatch = useDispatch();
  return (
    <li className={css.listItem}>
      {`${name}: ${number}`}
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() =>
          dispatch(deleteContact(id))
        }
      >
        Delete
      </button>
    </li>
  );
};
