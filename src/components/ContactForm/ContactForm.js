import { Component } from 'react';
import { Form, FormLabel, LabelName, FormInput, FormBtn } from './ContactForm.styled';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;

        this.setState({ [name]: value });
    };

    resetForm = () => {
        this.setState({ name: '', number: '' });
  };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addContact(this.state);
        this.resetForm();
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormLabel>
                    <LabelName>Name</LabelName>
                    <FormInput
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.name}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                </FormLabel>
                <FormLabel>
                    <LabelName>Number</LabelName>
                    <FormInput
                    onChange={this.handleChange}
                    type="tel"
                    value={ this.state.number}
                    name="number"
                    pattern="\+?\d{1,4}?[\-\.\s]?\(?\d{1,3}?\)?[\-\.\s]?\d{1,4}[\-\.\s]?\d{1,4}[\-\.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                </FormLabel>
                <FormBtn type="submit">Add contact</FormBtn>
            </Form>
        )
    }
};

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
};