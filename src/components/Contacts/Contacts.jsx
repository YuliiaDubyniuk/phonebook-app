import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import css from './Contacts.module.css';

export const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts);  

  return (
    <ol className={css.contactList}>
      {contacts.length > 0 && contacts.map(({ id, name, phone }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          phone={phone}
        />
      ))}
    </ol>
  );
}
