// import React, { Component } from 'react';
// import { ContactsForm } from '../ContactsForm/ContactsForm';
// import { Filter } from '../Filter/Filter';
// import { ContactList } from '../ContactsList/ContactsList';
// import { AppWrapper,Title, SearchWrapper, StyledTitles, CloseBtn, OpenPhonebook } from './app.styled';


// const localStorageKey = 'contacts'

// export class App extends Component {
  // state = {
  //   contacts: [
  //   ],
  //   filter: '',
  //   isOpen: false,
  // };
  
  // componentDidMount = () => { 
  //   const savedContacts = localStorage.getItem(localStorageKey);

  //   if (savedContacts !== null) {
  //     this.setState({
  //       contacts: JSON.parse(savedContacts),
  //     })
  //   }
  // }
  
  // componentDidUpdate = (prevProps, prevState) => {
    
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem(localStorageKey, JSON.stringify(this.state.contacts));
  //  }
  // }
  

  
  // addContact = (newContact) => {
  //   if (this.state.contacts.find(contact => contact.name === newContact.name)) {
  //     return alert(`${newContact.name} is already in contacts`);
  //   }
      
  //   if (this.state.contacts.find(contact => contact.number === newContact.number)) {
  //     return alert(`${newContact.number} is already in contacts`);
  //   }

  //   this.setState(prevState => ({
  //     contacts: [ ...prevState.contacts, newContact]
  //   }));
  // };



  // getContact = evt => {
  //   const searchQuerry = evt.currentTarget.value;
  //   this.setState({filter: searchQuerry})
  // }
  
  // removeContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  // showPhonebook = () => {
  //   this.setState({ isOpen: true });
  // };

  //   hidePhonebook = () => {
  //   this.setState({ isOpen: false });
  // };
  
  // render() {
  //   const { contacts, filter } = this.state;
  //   const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLocaleLowerCase()));
  //   return (
  //     <>
  //       {!this.state.isOpen && <OpenPhonebook onClick={this.showPhonebook} className="phoneBook">Open Phonebook</OpenPhonebook>}
  //       {this.state.isOpen &&
  //         <AppWrapper>
  //           <CloseBtn onClick={this.hidePhonebook}/>
  //           <ContactsForm onAdd={ this.addContact } />
  //           <SearchWrapper>
  //             <StyledTitles>
  //               <Title>Contacts</Title>
  //               <p>Find contacts by name</p>
  //             </StyledTitles>
  //             <Filter filter={ filter } getContact={this.getContact}  />
  //             <ContactList filteredContacts={filteredContacts} removeContact={ this.removeContact} />
  //           </SearchWrapper>
  //       </AppWrapper>
  //       }
          
  //       </>
  //   )
  // }
// };
// test