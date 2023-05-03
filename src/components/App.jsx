import { Component } from 'react';
import { nanoid } from 'nanoid'; 
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const initialContacts = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }; 

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts)
      });
    } else {
      this.setState({
        contacts: initialContacts
      })
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  addContact = ({ name, number }) => {
    if (
      this.state.contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase() 
      )
    ) {
      alert(`${name} is already in contacts`);
    } else if (
       this.state.contacts.some(
          value => value.number.toLocaleLowerCase() === number.toLocaleLowerCase()
      )
    ) {
      alert(`This phone number is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          {
            id: nanoid(),
            name: name,
            number: number
          }
        ]
      }))
    }
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  filter = () => {
  const { contacts, filter } = this.state;

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
    
    return filteredContacts;
  };

  deleteContact = id => {

  const { contacts } = this.state;
  const filtered = contacts.filter(item => item.id !== id);
  this.setState({ contacts: filtered });
  }

render() {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm addContact={ this.addContact} />
      <h2>Contacts</h2>
      <Filter filter={this.state.filter} onInputChange={this.onInputChange} />
      <ContactList contacts={this.filter()} deleteContact={this.deleteContact} />
      <GlobalStyle/>
    </Layout>
  )
  }
};
