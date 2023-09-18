import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Title, Wrapper, HeaderWrapper } from './Header.styled';
import { Filter } from 'components/Filter/Filter';
import { CreateContact } from 'components/CreateContact/CreateContact';
import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter } from 'redux/filterSlice';
import { Link } from 'react-router-dom';

export const Header = ({ getContact }) => {
  const nameFromFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <HeaderWrapper>
      <Link to="/" style={{ textDecoration: 'none', color: '#696969' }}>
        <Wrapper>
          <AccountCircleIcon sx={{ fontSize: 50, color: '#47A76A' }} />
          <Title>Phonebook</Title>
        </Wrapper>
      </Link>
      <Filter
        filter={nameFromFilter}
        getContact={e => dispatch(contactsFilter(e.currentTarget.value))}
      />
      <CreateContact />
    </HeaderWrapper>
  );
};
