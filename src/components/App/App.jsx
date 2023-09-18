
import { useDispatch, useSelector } from "react-redux";
import { removeContact, updatePhonebook } from "redux/contactsSlice";
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactList } from '../ContactsList/ContactsList';
import { AppWrapper} from './app.styled';
import { contactsFilter } from "redux/filterSlice";
import { Header } from 'components/Header/Header';



export const App = () => {
  const contacts = useSelector(updatePhonebook);

  const nameFromFilter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(nameFromFilter.toLowerCase()));
    
    return (
      <>
        <AppWrapper>
          <Header filter={ nameFromFilter } getContact={ (e) => dispatch(contactsFilter(e.currentTarget.value)) } />
          <ContactsForm />  
          <main>
            <ContactList filteredContacts={ filteredContacts } removeContact={ (contactId) => dispatch(removeContact(contactId)) } />
          </main>
        </AppWrapper>
      </>
    )
}