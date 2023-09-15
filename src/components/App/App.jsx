import { useState } from "react";
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactsList/ContactsList';
import { AppWrapper, Title, SearchWrapper, StyledTitles, CloseBtn, OpenPhonebook } from './app.styled';
import { useDispatch, useSelector } from "react-redux";
import { removeContact, updatePhonebook } from "redux/contactsSlice";
import { contactsFilter } from "redux/filterSlice";



export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = useSelector(updatePhonebook);

  const nameFromFilter = useSelector(state => state.filter);

  const dispatch = useDispatch();


  const showPhonebook = () => {
    setIsOpen(true)
  };

  const hidePhonebook = () => {
      setIsOpen(false)
  };

  const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(nameFromFilter.toLowerCase()));
    
    return (
      <>
        {!isOpen && <OpenPhonebook onClick={showPhonebook} className="phoneBook">Open Phonebook</OpenPhonebook>}
        {isOpen &&
          <AppWrapper>
            <CloseBtn onClick={hidePhonebook}/>
            <ContactsForm />

            <SearchWrapper>
              <StyledTitles>
                <Title>Contacts</Title>
                <p>Find contacts by name</p>
              </StyledTitles>
              <Filter filter={ nameFromFilter } getContact={(e) => dispatch(contactsFilter(e.currentTarget.value))}  />
              <ContactList filteredContacts={filteredContacts} removeContact={ (contactId) => dispatch(removeContact(contactId))} />
            </SearchWrapper>
        </AppWrapper>
        }
        </>
    )
}