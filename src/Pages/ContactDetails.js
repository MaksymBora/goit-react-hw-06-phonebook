// import { useRef } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
import {
  BackBtn,
  AvatarWrapper,
  Avatar,
  TopContent,
  EditBtnWrapper,
  BtnWrapper,
  RemoveBtnWrapper,
  EditButton,
  RemoveButton,
  DetailsWrapper,
  PhoneNumberWrapper,
} from './ContactDetails.styled';
import { TbArrowBackUp } from 'react-icons/tb';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FiPhone } from 'react-icons/fi';

const ContactDetails = () => {
  //   const location = useLocation();
  //   const { contactId } = useParams();

  //   const backLinkLocation = useRef(location.state?.from ?? '/addContact');

  return (
    <div>
      <TopContent>
        <AvatarWrapper>
          <Avatar>
            <BackBtn to="/">
              <TbArrowBackUp size={'30px'} />
            </BackBtn>
            <AccountCircleIcon sx={{ fontSize: '210px', color: '#7E57C2' }} />
          </Avatar>
          <div>
            <h2>Name</h2>
          </div>
        </AvatarWrapper>

        <BtnWrapper>
          <EditBtnWrapper>
            <EditButton>Edit</EditButton>
          </EditBtnWrapper>
          <RemoveBtnWrapper>
            <RemoveButton>Delete</RemoveButton>
          </RemoveBtnWrapper>
        </BtnWrapper>
      </TopContent>
      <hr style={{ marginTop: '20px', marginBottom: '40px' }} />
      <div>
        <DetailsWrapper>
          <h2>Contact Details</h2>
          <PhoneNumberWrapper>
            <FiPhone size={21} />
            <a href="http://localhost:3000/goit-react-hw-06-phonebook">
              098-32-23-2
            </a>
          </PhoneNumberWrapper>
        </DetailsWrapper>
      </div>
    </div>
  );
};

export default ContactDetails;
