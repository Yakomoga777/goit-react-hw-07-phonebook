import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledContactInput,
  StyledForm,
  StyledFormContainer,
  StyledInput,
} from './ContactForm.styled';

import { addContact } from 'Redux/operations';
import { selectcontacts } from 'Redux/selectors';

export const ContactForm = ({ btn }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contacts = useSelector(selectcontacts);

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
    const newContact = { name, number };

    // перевірка на наявний конткт
    const includesName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (!includesName) {
    } else {
      return alert(`${newContact.name} is already in contacts`);
    }
    dispatch(addContact(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <StyledForm onSubmit={onSubmit}>
        <StyledContactInput
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <StyledContactInput
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
