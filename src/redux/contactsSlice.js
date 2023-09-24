import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './accountFetch';

const fetchingInProgress = state => {
  state.isLoading = true;
};
const fetchingSuccess = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};
const fetchingError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const deleteContacts = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};
const addFulfilled = (state, action) => {
  state.isLoading = false;
  state.items.push(action.payload);
  state.error = null;
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, fetchingInProgress)
      .addCase(fetchContacts.fulfilled, fetchingSuccess)
      .addCase(fetchContacts.rejected, fetchingError)
      .addCase(addContact.pending, fetchingInProgress)
      .addCase(addContact.fulfilled, addFulfilled)
      .addCase(addContact.rejected, fetchingError)
      .addCase(deleteContact.pending, fetchingInProgress)
      .addCase(deleteContact.fulfilled, deleteContacts)
      .addCase(deleteContact.rejected, fetchingError);
  },
});

export const contactsReducer = contactsSlice.reducer;
