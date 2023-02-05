import { Component } from "react";
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import contacts from '../data/data.json';
import { Container, Title, ContactsList} from "./App.styled";
import ContactForm from './ContactForm'
import ContactList from './ContactList';
import Filter from "./Filter";


export class App extends Component {
  
    state = {
    contacts: contacts,
    filter: ''
  }

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts-list'));
    
    if (parsedContacts?.length) {
      this.setState({ contacts: parsedContacts });
    }
}

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
        localStorage.setItem('contacts-list', JSON.stringify(contacts));
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };


    handleSubmit = ({name, number}) => {
    const id = nanoid();
    const contactsLists = [...this.state.contacts];

    if (contactsLists.findIndex(contact => name.toLowerCase() === contact.name.toLowerCase() ) !== -1) {
    Notiflix.Notify.warning(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ name, id, number });
    }

    this.setState({ contacts: contactsLists });
  };

  handleDelete = e => {
    const id = e.currentTarget.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilteredContacts = () => {
    const filterContactsList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return filterContactsList;
  };

  render() {
    const { filter } = this.state;

    return (      
      <Container >
        <Title>Phonebook</Title>
        <ContactForm handleSubmit={this.handleSubmit} />
        <ContactsList>Contacts</ContactsList>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactList
          contacts={this.getFilteredContacts()}
          handleDelete={this.handleDelete}
        />
      </Container>
    );
  };
}
