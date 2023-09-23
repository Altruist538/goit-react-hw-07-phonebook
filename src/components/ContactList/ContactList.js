import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, Button } from './ContactList.styled';

import { fetchContacts, deleteContact } from 'redux/accountFetch';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters);
  const dispatch = useDispatch();
  const visibleQuizItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  // const visibleQuizItems = contacts.items;
  return (
    <>
      <List>
        {visibleQuizItems.map(contact => (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <Button onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};
