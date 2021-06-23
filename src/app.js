import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import shortid from 'shortid';
import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = text => {
    const searchSameName = this.state.contacts.map(cont => cont.name).includes(text.name);

    if (searchSameName) {
      alert(`${text.name} is already in contacts`);
    } else {
      const contact = {
        id: shortid.generate(),
        ...text,
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };
  formSubmitHandler = data => {
    console.log(data);
  };
  render() {
    return (
      <>
        <div>
          <ContactForm formSubmitHandler={this.formSubmitHandler} onAddContact={this.addContact} />
        </div>
      </>
    );
  }
}

export default App;
