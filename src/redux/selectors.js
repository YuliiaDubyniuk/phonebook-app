export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
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
}