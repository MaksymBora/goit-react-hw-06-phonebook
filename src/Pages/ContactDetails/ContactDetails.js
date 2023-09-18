import { useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  BackBtn,
  AvatarWrapper,
  Avatar,
  TopContent,
  BtnWrapper,
  RemoveBtnWrapper,
  RemoveButton,
  DetailsWrapper,
  PhoneNumberWrapper,
} from './ContactDetails.styled';
import { TbArrowBackUp } from 'react-icons/tb';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FiPhone } from 'react-icons/fi';
import { removeContact, updatePhonebook } from 'redux/contactsSlice';

const ContactDetails = () => {
  const location = useLocation();
  const { contactId } = useParams();
  const contacts = useSelector(updatePhonebook);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const currentContact = contacts.find(contact => contact.id === contactId);

  const backLinkLocation = useRef(location.state?.from ?? '/addContact');

  const handleDelete = () => {
    const isConfirmed = window.confirm('Delete contact?');

    if (isConfirmed) {
      dispatch(removeContact(contactId));
      navigate('/');
    }
  };

  return (
    <>
      <TopContent>
        <AvatarWrapper>
          <Avatar>
            <BackBtn to={backLinkLocation.current}>
              <TbArrowBackUp size={'30px'} />
            </BackBtn>
            <AccountCircleIcon sx={{ fontSize: '210px', color: '#7E57C2' }} />
          </Avatar>
          <div>
            <h2>{currentContact.name}</h2>
          </div>
        </AvatarWrapper>

        <BtnWrapper>
          {/* <EditBtnWrapper>
            <EditButton>Edit</EditButton>
          </EditBtnWrapper> */}
          <RemoveBtnWrapper>
            <RemoveButton typeof="button" onClick={handleDelete}>
              Delete
            </RemoveButton>
          </RemoveBtnWrapper>
        </BtnWrapper>
      </TopContent>
      <hr style={{ marginTop: '20px', marginBottom: '40px' }} />
      <div>
        <DetailsWrapper>
          <h2>Contact Details</h2>
          <PhoneNumberWrapper>
            <FiPhone size={21} />
            <a href={`tel:${currentContact.number}`}>{currentContact.number}</a>
          </PhoneNumberWrapper>
        </DetailsWrapper>
      </div>
    </>
  );
};

export default ContactDetails;
