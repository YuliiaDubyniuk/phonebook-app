import { createSelector } from '@reduxjs/toolkit';

const selectContacts = state => state.contacts;

export const selectAllContacts = createSelector(
  selectContacts,
  contacts => contacts.contacts
);
export const selectIsLoading = createSelector(
  selectContacts,
  contacts => contacts.isLoading
);
export const selectError = createSelector(
  selectContacts,
  contacts => contacts.error
);
export const selectFilterValue = state => state.filter;

export const selectFilteredContacts = state => {
    const { filter, contacts: { contacts } } = state;
    if (!filter) {
        return contacts;
    }
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
};
