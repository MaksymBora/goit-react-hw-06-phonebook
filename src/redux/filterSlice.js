export const contactsFilter = name => {
  return {
    type: 'filter/contactName',
    payload: name,
  };
};

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filter/contactName':
      return action.payload;

    default:
      return state;
  }
};
