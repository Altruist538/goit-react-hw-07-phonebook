import { createSlice } from '@reduxjs/toolkit';
const contactBaz = [];
const slice = createSlice({
  name: 'contacts',
  initialState: contactBaz,
  reducers: {
    addContacts(state, action) {
      state.push(action.payload);
    },
    deleteContacts(state, action) {
      const index = state.findIndex(state => state.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContacts, deleteContacts } = slice.actions;
