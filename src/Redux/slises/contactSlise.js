import { createSlice } from '@reduxjs/toolkit';
import { addContacts, fetchContacts } from 'Redux/operations';

export const contactSlise = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   addContact(state, action) {
  //     state.push(action.payload);
  //   },
  //   removeContact(state, action) {
  //     const updatedContacts = state.filter(
  //       contact => contact.id !== action.payload
  //     );

  //     return updatedContacts;
  //   },
  //   // Виконається в момент старту HTTP-запиту
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   // Виконається якщо HTTP-запит завершився успішно
  //   fetchingSuccess(state, action) {
  //     state.contacts = action.payload;
  //     state.isLoading = false;
  //     state.error = null;
  //   },
  //   // Виконається якщо HTTP-запит завершився з помилкою
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    //*redusers for POST

    [addContacts.pending](state) {
      state.isLoading = true;
    },
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      // state.isLoading = [...state.isLoading, (state.isLoading: false)];
      state.error = null;
      // state.push(action.payload);
      // state.contacts.push(action.payload);
      state.contacts.contacts = [...state, ...action.payload];
    },
    [addContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addContact,
  removeContact,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = contactSlise.actions;
