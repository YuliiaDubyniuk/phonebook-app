import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, phone}) => {
  const dispatch = useDispatch();
  return (
    <li className={css.listItem}>
      {`${name}: ${phone}`}
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
