import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { Container, Title, ContactsList} from "./App.styled";
import ContactForm from './ContactForm'
import ContactList from './ContactList';
import Filter from "./Filter";


export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts-list' ?? []));
  });
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    window.localStorage.setItem('contacts-list', JSON.stringify(contacts));
  }, [contacts]);


   const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };


  const handleSubmit = ({ name, number }) => {
    if (contacts.findIndex(contact => name.toLowerCase() === contact.name.toLowerCase()) !== -1) {
      Notiflix.Notify.warning(`${name} is already in contacts.`);
    } else {
    setContacts(prevContacts => {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      return [contact, ...prevContacts];
    });
  }
  };

  const handleDelete = e => {
    const id = e.currentTarget.id;
    setContacts (contacts.filter(contact => contact.id !== id));
  };

   const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
    });

    return filterContactsList;
  };

    return (      
      <Container >
        <Title>Phonebook</Title>
        <ContactForm onAddContact={handleSubmit} />
        <ContactsList>Contacts</ContactsList>
        <Filter filter={filter} handleChange={handleChange} />
        <ContactList
          contacts={getFilteredContacts()}
          handleDelete={handleDelete}
        />
      </Container>
    );

}
