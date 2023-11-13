import { Contacts } from 'components/Contacts/Contacts';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { SearchField } from 'components/SearchField/SearchField';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contactsSelectors';
import { fetchContacts } from 'redux/contactsSlice';
import css from './ContactsPage.module.css'

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsPage}>
      <ContactForm />
      <div className={css.contactsWrap}>
        <SearchField />
        {isLoading && <p className={css.load}>Loading...</p> }
        <Contacts />
      </div>
    </div>
  );
};

export default ContactsPage;
