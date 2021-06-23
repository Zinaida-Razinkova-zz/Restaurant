import React, { Component } from 'react';
import propTypes from 'prop-types';
// import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    people: '',
    date: '',
    time: '',
  };

  handlChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    // value - это phone  в форме
  };

  handlSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    this.props.formSubmitHandler(this.state);
    this.reset();
    this.props.onAddContact(this.state);
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <section class="container ">
        <div class="book-section">
          <div class="book-block">
            <div class="book-block-form">
              <h3 id="BOOKING" class="book-title">
                book a table
              </h3>
              <form onSubmit={this.handlSubmit}>
                <input
                  onChange={this.handlChange}
                  value={this.state.name}
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                />
                <input
                  onChange={this.handlChange}
                  value={this.state.email}
                  type="email"
                  name="email"
                  pattern="@"
                  title="Укажите верный email, например, ivan.sidorenko@ukr.net"
                  required
                />
                <input
                  className={styles.inputName}
                  onChange={this.handlChange}
                  value={this.state.phone}
                  type="tel"
                  name="phone"
                  pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                  title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                  required
                />
                <input
                  className={styles.inputName}
                  onChange={this.handlChange}
                  value={this.state.people}
                  type="text"
                  name="people"
                  pattern="^[0-9]$"
                  title="Укажите количество человек цифрами, например, 11 или 4"
                  required
                />
                <input
                  className={styles.inputName}
                  onChange={this.handlChange}
                  value={this.state.date}
                  type="date"
                  name="date"
                  required
                />
                <input
                  className={styles.inputName}
                  onChange={this.handlChange}
                  value={this.state.time}
                  type="time"
                  name="time"
                  required
                />
                <button data-modal-open class="book-button" type="submit">
                  BOOK NOW
                </button>
              </form>
            </div>
            <div>
              <img class="book-img" src="./images/book.png" alt="" width="475" />
            </div>
          </div>
          <p class="book-inscription">
            Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM, Phone: +40 729 131 637/+40 726 458 782
          </p>
        </div>
        <a href="#" class="scrollup"></a>
      </section>
    );
  }
}

// ContactForm.propTypes = {
//   onAddContact: propTypes.func.isRequired,
//   name: propTypes.string.isRequired,
//   number: propTypes.string.isRequired,
// };

export default ContactForm;
