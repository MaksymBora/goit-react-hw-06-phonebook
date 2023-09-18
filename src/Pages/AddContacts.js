import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Wrapper, AvatarWrapper } from './AddContacts.style';
import { TbArrowBackUp } from 'react-icons/tb';

const AddContacts = () => {
  return (
    <Wrapper>
      <h2>Create Contact</h2>
      <AvatarWrapper>
        <TbArrowBackUp size={'30px'} />
        <AccountCircleIcon sx={{ fontSize: '210px', color: '#e5e5e5' }} />
      </AvatarWrapper>
      <hr />
      <ContactsForm />
    </Wrapper>
  );
};

export default AddContacts;
