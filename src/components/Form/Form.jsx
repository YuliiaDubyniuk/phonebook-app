import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addContact } from 'redux/contactsSlice';
import { selectAllContacts } from 'redux/contactsSelectors';
import { toast } from 'react-toastify';
import css from './Form.module.css';

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const contactList = useSelector(selectAllContacts);
  const onSubmit = contact => {
    if (
      contactList.some(
        item => item.name === contact.name || item.number === contact.number
      )
    ) {
      toast.warning('This contact has already been added.');
      return;
    }
    dispatch(addContact(contact));
    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={css.title}>Add new contact</h2>
      <label className={css.label}>
        <span className={css.contactSpan}>Name:</span>
        <input
          id="contactName"
          placeholder="Enter contact name"
          className={css.contactInput}
          {...register('name', {
            required: true,
            pattern: "^[A-Za-z\u0080-\uFFFF ']+$",
            type: 'text',
          })}
        />
        {errors.name && (
          <span className={css.error}>
            This field is required. It may contain only letters, apostrophe,
            dash and spaces.
          </span>
        )}
      </label>
      <label className={css.label}>
        <span className={css.contactSpan}>Phone:</span>
        <input
          id="contactPhone"
          className={css.contactInput}
          placeholder="Enter phone number"
          {...register('number', {
            required: true,
            pattern: '^(+?[0-9.()-s]*)$',
            type: 'text',
          })}
        />
        {errors.number && (
          <span className={css.error}>
            This field is required. It can contain digits, spaces, dashes,
            parentheses and can starts with +
          </span>
        )}
      </label>
      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
