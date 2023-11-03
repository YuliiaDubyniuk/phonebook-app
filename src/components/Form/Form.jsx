import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { selectContacts } from 'redux/selectors';
import css from './Form.module.css';

export const Form = () => { 
  const dispatch = useDispatch();
  const contactsList = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();    
    const name = evt.currentTarget.elements.name.value;
    const phone = evt.currentTarget.elements.number.value;
    const newContact = {
      name,
      phone,
    };

    contactsList.some(
      contact =>
        contact.name.toLowerCase().trim() ===
        newContact.name.toLowerCase().trim()
    )
      ? alert(`${newContact.name} is already in contacts.`)
      : dispatch(addContact(newContact));
    
    evt.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.inputLabel}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.inputLabel}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
      </label>
      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
