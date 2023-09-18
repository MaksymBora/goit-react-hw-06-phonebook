import AddIcon from '@mui/icons-material/Add';
import { PaperStyled } from './CreateContact.styled';

export const CreateContact = () => {
  return (
    <PaperStyled
      elevation={3}
      sx={{
        borderRadius: '15px',
        p: '4px',
        alignItems: 'center',
        width: '150px',
        display: 'flex',
      }}
    >
      <AddIcon type="button" sx={{ ml: 'auto', mr: 'auto' }} />
      <p>Create contact</p>
    </PaperStyled>
  );
};
