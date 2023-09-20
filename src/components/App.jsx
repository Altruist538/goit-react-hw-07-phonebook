import { ContactList } from './ContactList/ContactList';
import { GlobalStyle, Section } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export function App() {
  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
      <GlobalStyle />
    </>
  );
}
