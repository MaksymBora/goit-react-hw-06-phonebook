import styled from 'styled-components';
import { InputBase } from '@mui/material';

export const PaperStyledSearch = styled(InputBase)`
  box-shadow: 0 0 0 transparent;
  transition: background-color 250ms ease-in;

  &:focus-within {
    background-color: transparent;
    box-shadow: -1px 4px 4px -2px rgba(0, 0, 0, 0.65);
  }
`;

export const SearchStyled = styled(InputBase)`
  background-color: inherit;
`;
