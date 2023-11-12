import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contactsSelectors';
import css from './Contacts.module.css';

export const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      {Array.isArray(contacts) && contacts.length > 0 ? (
        <ul className={css.contactsList}>
          {contacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      ) : (
        <p className={css.contactText}>
          Your Phonebook is empty. <br /> You can start add contacts right now.
        </p>
      )}
    </>
  );
};
