
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactsList/ContactsList';
import { AppWrapper, Title} from './app.styled';
import { useDispatch, useSelector } from "react-redux";
import { removeContact, updatePhonebook } from "redux/contactsSlice";
import { contactsFilter } from "redux/filterSlice";
import { CreateContact } from 'components/CreateContact/CreateContact';



export const App = () => {
  const contacts = useSelector(updatePhonebook);

  const nameFromFilter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(nameFromFilter.toLowerCase()));
    
    return (
      <>
        <AppWrapper>
          <header>
            <Title>Contacts</Title>
            <Filter filter={ nameFromFilter } getContact={ (e) => dispatch(contactsFilter(e.currentTarget.value)) } />
            <CreateContact/>
          </header>
          {/* <ContactsForm /> */ }
          <ContactList filteredContacts={ filteredContacts } removeContact={ (contactId) => dispatch(removeContact(contactId)) } />
        </AppWrapper>
        
        </>
    )
}