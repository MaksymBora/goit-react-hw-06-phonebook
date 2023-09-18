import AddIcon from '@mui/icons-material/Add';
import { PaperStyled } from './CreateContact.styled';

export const CreateContact = () => {
  return (
    <PaperStyled
      elevation={3}
      sx={{
        borderRadius: '25px',
        p: '12px 10px 12px 10px',
        alignItems: 'center',
        minWidth: '150px',
        display: 'flex',
        gap: '5px',
      }}
    >
      <AddIcon type="button" sx={{ ml: 'auto', mr: 'auto' }} />
      <p>Create contact</p>
    </PaperStyled>
  );
};
