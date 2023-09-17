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
import { PatternFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact, updatePhonebook } from 'redux/contactsSlice';

const ContactsSchema = Yup.object().shape({
  name: Yup.string().required('* Name is required'),
  number: Yup.string().required('* Phone number is required'),
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
        {({ setFieldValue }) => (
          <StyledForm autoComplete="off">
            <StyledLable>
              Name
              <StyledField name="name" placeholder="Jane" />
              <StyledError component="div" name="name" />
            </StyledLable>

            <StyledLable>
              Number
              <StyledField
                as={PatternFormat}
                format="+38 (0##) ### ## ##"
                allowEmptyFormatting
                mask="_"
                onValueChange={values => {
                  setFieldValue('number', values.formattedValue);
                }}
                name="number"
              />
              <StyledError component="div" name="number" />
            </StyledLable>

            <Button type="submit">
              <FiUserPlus size={26} />
            </Button>
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};
