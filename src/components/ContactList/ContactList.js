import PropTypes from 'prop-types';
import { ContactItem, ContactName, ContactNumber, ContactBtn } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ul>
            {contacts.map(contact => {
                return (
                    <ContactItem key={contact.id}>
                        <ContactName>{contact.name}:</ContactName>
                        <ContactNumber>{contact.number}</ContactNumber>
                        <ContactBtn
                            type='button'
                            onClick={() => deleteContact(contact.id)}>
                            Delete
                        </ContactBtn>
                    </ContactItem>)
            })}
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        })
    ).isRequired,
    deleteContact: PropTypes.func.isRequired
};