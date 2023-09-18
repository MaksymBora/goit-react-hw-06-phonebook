import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Title, Wrapper, HeaderWrapper } from './Header.styled';
import { Filter } from 'components/Filter/Filter';
import { CreateContact } from 'components/CreateContact/CreateContact';

export const Header = ({ filter, getContact }) => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <AccountCircleIcon sx={{ fontSize: 50, color: '#47A76A' }} />
        <Title>Phonebook</Title>
      </Wrapper>
      <Filter filter={filter} getContact={getContact} />
      <CreateContact />
    </HeaderWrapper>
  );
};
