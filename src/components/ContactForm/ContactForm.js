import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {
  StyledForm,
  StyledField,
  StyledError,
  Button,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2).max(50).required('* Name is required'),
  number: Yup.string()
    .min(6, 'Phone number is too short')
    .max(16, 'Phone number is too long')
    .required('* Enter phone number'),
});
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          const isContactExists = contacts.find(
            contact =>
              contact.name.toLowerCase() === values.name.toLowerCase() ||
              contact.number === values.number
          );
          if (isContactExists) {
            return alert(
              `${values.name} or ${values.number} is already in contacts`
            );
          }
          dispatch(addContacts({ ...values, id: nanoid() }));
          actions.resetForm();
        }}
      >
        <StyledForm>
          <label>
            Name
            <StyledField type="text" name="name" placeholder="Jacob Mercer" />
            <StyledError name="name" component="div" />
          </label>

          <label>
            Number
            <StyledField type="number" name="number" placeholder="xxx-xx-xx" />
            <StyledError name="number" component="div" />
          </label>

          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    </>
  );
};
