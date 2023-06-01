import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../Redux/operations.js';
import { selectIsLoading } from '../Redux/selectors';

const theme = {};

// export const INITIAL_CONTACTS = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const isLoading = useSelector(selectIsLoading);
  console.log(isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // Рендерим розмітку в залежності від значень у стані

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm btn="Add contact" />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <p>Loading...</p>}
      <ContactList />
    </ThemeProvider>
  );
};
