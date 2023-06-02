import React from 'react';
import { useDispatch } from 'react-redux';
import { filteredContacts } from 'Redux/slises/filterSlise';
import { StyledFilterInput } from './Filter.styled';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();

  // Керований інпут фільтра
  const handleChangeFilter = event => {
    if (event.target.name === 'filter') {
      const filterInputValue = event.target.value;
      dispatch(filteredContacts(filterInputValue));
    }
  };

  return (
    <StyledFilterInput
      type="text"
      name="filter"
      required
      value={value}
      onChange={handleChangeFilter}
    />
  );
};
