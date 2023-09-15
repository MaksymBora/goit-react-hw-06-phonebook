import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const slice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-15', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-12', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-23', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    addNewContact(state, action) {
      state.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    removeContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const contactsReducer = slice.reducer;

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);

export const { addNewContact, removeContact } = slice.actions;

// Selectors

export const updatePhonebook = state => state.contacts;

// ======= VANILLA REDUX =======//

// export const addNewContact = data => {
//   return {
//     type: 'contacts/addNewContact',
//     payload: data,
//   };
// };

// export const removeContact = id => {
//   return {
//     type: 'contacts/removeContact',
//     payload: id,
//   };
// };

// // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },

// export const contactsReducer = (
//   state = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   action
// ) => {
//   switch (action.type) {
//     case 'contacts/addNewContact':
//       const newContact = {
//         id: nanoid(),
//         name: action.payload.name,
//         number: action.payload.number,
//       };
//       return [...state, newContact];
//     case 'contacts/removeContact':
//       return state.filter(contact => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };
