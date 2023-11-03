import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { SearchField } from './SearchField/SearchField';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsSlice';
import { Loader } from './Loader/Loader';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

return (
    <div>
      <h1>Phonebook</h1>
      <Form/>
      <h2>Contacts</h2>
      <SearchField />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <Contacts/>
    </div>
  )
}
