import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { FiUserPlus } from 'react-icons/fi';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledField,
  StyledError,
  StyledLable,
  Wrapper,
  Button,
} from './ContactsForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact, updatePhonebook } from 'redux/contactsSlice';

function validatePhone(phone) {
  let regex = /^(?:\+380\d{9}|0\d{9})$/;
  return regex.test(phone);
}

const ContactsSchema = Yup.object().shape({
  name: Yup.string().required('* Name is required'),
  number: Yup.string()
    .min(10)
    .max(13)
    .test('phone', '* Invalid phone number', function (value) {
      return validatePhone(value);
    })
    .required('* Phone number is required'),
});

const initialValues = { name: '', number: '' };

export const ContactsForm = () => {
  const allcontacts = useSelector(updatePhonebook);

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (allcontacts.find(contact => contact.name === values.name)) {
      return alert(`${values.name} is already in contacts`);
    }

    if (allcontacts.find(contact => contact.number === values.number)) {
      return alert(`${values.number} is already in contacts`);
    }

    dispatch(addNewContact({ ...values, id: nanoid() }));

    resetForm();
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactsSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm autoComplete="off">
          <StyledLable>
            Name
            <StyledField name="name" placeholder="Jane" />
            <StyledError component="div" name="name" />
          </StyledLable>

          <StyledLable>
            Number
            <StyledField name="number" placeholder="+380730990101" />
            <StyledError component="div" name="number" />
          </StyledLable>

          <Button type="submit">
            <FiUserPlus size={26} />
          </Button>
        </StyledForm>
      </Formik>
    </Wrapper>
  );
};
