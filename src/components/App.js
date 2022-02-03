import React,{ useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact'
import ContactList from './ContactList'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (newContacts) => {
      setContacts ([...contacts, { id: uuidv4(), ...newContacts }]);
      console.log(contacts);
  }

  const removeContactHandler = (id) => {
      console.log(id);
      const newContactList = contacts.filter( (keyId) => {
          return keyId.id !== id;
      });

      setContacts(newContactList);
  };

  useEffect( () =>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect( () =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
        <Header />
        <AddContact addContactHandler = {addContactHandler} />
        <ContactList contact = {contacts} getContactId = {removeContactHandler} />
    </div>
  );
}

export default App;
