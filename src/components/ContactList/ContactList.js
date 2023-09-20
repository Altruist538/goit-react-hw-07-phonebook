import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, Button } from './ContactList.styled';
import { deleteContacts } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filters);
  const dispatch = useDispatch();
  const visibleQuizItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <List>
        {visibleQuizItems.map(contact => (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <Button onClick={() => dispatch(deleteContacts(contact.id))}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};
