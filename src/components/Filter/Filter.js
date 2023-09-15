import PropTypes from 'prop-types';
import { InputFilter } from './Filter.styled';

export const Filter = ({ filter, getContact }) => {
  return (
    <div>
      <InputFilter
        value={filter}
        onChange={getContact}
        placeholder="Search..."
        type="text"
        name="filter"
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  getContact: PropTypes.func.isRequired,
};
