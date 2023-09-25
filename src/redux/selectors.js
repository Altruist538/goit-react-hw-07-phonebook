import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.contacts.items;

export const selectLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectStatusFilter = state => state.filters;

export const selectVisibleContacts = createSelector(
  [selectItems, selectStatusFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
