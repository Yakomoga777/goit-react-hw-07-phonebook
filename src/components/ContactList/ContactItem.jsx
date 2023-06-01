import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from 'Redux/slises/contactSlise';

import { StiledItem } from './ContactItem.styled';

export function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(removeContact(id));
  };
  return (
    <>
      <StiledItem key={id}>
        <p>
          {name}: {number}
        </p>
        <div></div>
        <button
          type="button"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </button>
      </StiledItem>
    </>
  );
}
