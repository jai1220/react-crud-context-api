import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const removeContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contact.map( (keyContacts) => {
        return (
            <ContactCard keyContact={keyContacts} clickHandler={removeContactHandler} key={keyContacts.id}/>
        );
    });

    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList;