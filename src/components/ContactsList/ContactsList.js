import { FiUserX } from 'react-icons/fi';
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

export const ContactList = ({ filteredContacts, removeContact }) => {
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
          <p>CONTACTS(23)</p>
        </TotalContacts>
        <tbody>
          {filteredContacts.map(contact => {
            return (
              <TableRawContent key={contact.id}>
                <TableDataName>
                  <Avatar
                    sx={{ bgcolor: deepPurple[500], width: 40, height: 40 }}
                  >
                    O
                  </Avatar>
                  <Name>{contact.name}</Name>
                </TableDataName>
                <TableDataNumber>{contact.number}</TableDataNumber>
                <div>
                  <DeleteBtn onClick={() => removeContact(contact.id)}>
                    <MdDelete size={25} />
                  </DeleteBtn>
                </div>
              </TableRawContent>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
