
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactsList/ContactsList';
import { AppWrapper} from './app.styled';
import { useDispatch, useSelector } from "react-redux";
import { removeContact, updatePhonebook } from "redux/contactsSlice";
import { contactsFilter } from "redux/filterSlice";
import { CreateContact } from 'components/CreateContact/CreateContact';
import { Header, MainTitle } from 'components/Header/Header';



export const App = () => {
  const contacts = useSelector(updatePhonebook);

  const nameFromFilter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(nameFromFilter.toLowerCase()));
    
    return (
      <>
        <AppWrapper>
          <Header filter={ nameFromFilter } getContact={ (e) => dispatch(contactsFilter(e.currentTarget.value)) } />
          {/* <ContactsForm /> */ }
          <ContactList filteredContacts={ filteredContacts } removeContact={ (contactId) => dispatch(removeContact(contactId)) } />
        </AppWrapper>
        
        </>
    )
}