import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledForm } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { addContact } from 'Redux/slises/contactSlise';
import { addContacts } from 'Redux/operations';

export const ContactForm = ({ btn }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts);

  // Контрольовані імпути
  const handleChange = evt => {
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    } else if (evt.target.name === 'number') {
      setNumber(evt.target.value);
    }
  };

  // Сабміт форми
  const onSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContact = { name, number, id: nanoid() };
    // dispatch(addContacts());
    dispatch(addContacts(newContact));

    // // перевірка на наявний конткт
    const includesName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (!includesName) {
      dispatch(addContact(newContact));
    } else {
      return alert(`${newContact.name} is already in contacts`);
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  // const dispatch = useDispatch();
  // Отримуємо частини стану
  const { contacts, isLoading, error } = useSelector(
    state => state.contacts.contacts
  );
  // Викликаємо операцію
  // useEffect(() => {
  //   dispatch(addContacts());
  // }, [dispatch]);
  // Рендерим розмітку в залежності від значень у стані
  // перевірка на наявний конткт

  return (
    <div>
      <StyledForm onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />

        <button type="submit">{btn}</button>
      </StyledForm>
    </div>
  );
};
