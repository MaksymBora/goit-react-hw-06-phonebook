import { MdDelete } from 'react-icons/md';
import {
  Thead,
  Table,
  TableRaw,
  TableHor,
  TableDataName,
  TableRawContent,
  TableDataNumber,
  DeleteBtn,
  Name,
  TotalContacts,
} from './ContactsList.styled';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact, updatePhonebook } from 'redux/contactsSlice';

export const ContactList = () => {
  const contactsAmount = useSelector(state => state.contacts.items.length);

  const contacts = useSelector(updatePhonebook);

  const nameFromFilter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(nameFromFilter.toLowerCase())
  );

  const dispatch = useDispatch();

  return (
    <>
      <Table>
        <Thead>
          <TableRaw>
            <TableHor>Name</TableHor>
            <TableHor>Phone Number</TableHor>
          </TableRaw>
        </Thead>
        <TotalContacts>
          <p>CONTACTS ({contactsAmount})</p>
        </TotalContacts>
        <tbody>
          {filteredContacts.map(contact => {
            const firstLetter = contact.name.slice(0, 1).toUpperCase();

            const contactName = contact.name.charAt(0).toUpperCase();
            const contactSliced = contact.name.slice(1);
            const ContactNameCapital = contactName + contactSliced;

            return (
              <TableRawContent key={contact.id}>
                <TableDataName>
                  <Avatar
                    sx={{ bgcolor: deepPurple[500], width: 40, height: 40 }}
                  >
                    {firstLetter}
                  </Avatar>
                  <Name>{ContactNameCapital}</Name>
                </TableDataName>
                <TableDataNumber>{contact.number}</TableDataNumber>

                <DeleteBtn onClick={() => dispatch(removeContact(contact.id))}>
                  <MdDelete size={25} />
                </DeleteBtn>
              </TableRawContent>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
