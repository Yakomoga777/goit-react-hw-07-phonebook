import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;

  width: 280px;

  &:hover {
    /* width: 270px; */
    /* height: 50px; */
    border: 2px solid rgba(24, 232, 21, 0.24);
    margin: -2px -2px -2px -2px;
    border-radius: 10px;
    /* background-color: rgba(24, 232, 21, 0.24); */
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid black;
  border-radius: 10px;
`;

// export const StyledButton = styled.button`
