import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/operations';

import { StyledButton, StyledItem } from './ContactItem.styled';

export function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <StyledItem key={id}>
        <div>
          <p>{name}</p>
          <p>{number}</p>
        </div>
        <StyledButton
          type="StyledButton"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </StyledButton>
      </StyledItem>
    </>
  );
}
