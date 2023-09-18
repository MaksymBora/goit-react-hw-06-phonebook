import * as React from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import { SearchStyled, PaperStyledSearch } from './Filter.styled';

export const Filter = ({ filter, getContact }) => {
  return (
    <PaperStyledSearch
      as={Paper}
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 300,
        bgcolor: 'rgb(241 243 244)',
        boxShadow: 0,
        borderRadius: '8px',
        transition: 'background-color 250ms ease-in, box-shadow 250ms ease-in',
      }}
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <SearchStyled
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'filter' }}
        name="filter"
        value={filter}
        onChange={getContact}
      />
    </PaperStyledSearch>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  getContact: PropTypes.func.isRequired,
};
