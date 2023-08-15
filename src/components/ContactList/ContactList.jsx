import React from 'react';
import PropTypes from 'prop-types';
import s from '../ContactList/ContactList.module/ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.list}>
    {contacts.map(contact => (
      <li key={contact.id} className={s.item}>
        <p className={s.text}>
          {contact.name}: {contact.number}
        </p>
        <button
          type="button"
          onClick={() => onDeleteContact(contact.id)}
          className={s.button}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
