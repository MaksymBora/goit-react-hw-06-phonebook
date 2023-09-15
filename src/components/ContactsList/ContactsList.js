import { FiUserX } from 'react-icons/fi';
import { ContactItem, RemoveButton } from './ContactsList.styled';

export const ContactList = ({ filteredContacts, removeContact }) => {
  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <ContactItem key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <RemoveButton onClick={() => removeContact(contact.id)}>
              <FiUserX size={21} />
            </RemoveButton>
          </ContactItem>
        );
      })}
    </ul>
  );
};
