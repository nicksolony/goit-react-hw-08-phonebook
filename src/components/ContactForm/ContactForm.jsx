import React, { useState } from "react";
import {Form} from './ContactForm.styled'
import { useAddContactMutation } from "redux/contacts/contactsSlice";
import { toast } from "react-hot-toast";



export const ContactForm = ({contacts}) => {

  // const dispatch = useDispatch();
  // const contacts = useSelector(contactsSelector).contacts;
  
  const [addContact] = useAddContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleDataInput = (e) => {
      let { id, value } = e.target;
      switch (id) {
        case 'name':
          setName(value);
          break;
        case 'number':
          setNumber(value);
          break;
        default:
          break;
      }
  };
  
  const handleAddingNewContact = async data => {
    try {
      await addContact(data);
      toast.success(`Successfully added ${name}!`)
    } catch (error) {
      console.log(error);
    }
  };

    
  const createNewContact = (name, number) => {
    let newContact = { name, number };
    // dispatch(addContact(newContact));
    handleAddingNewContact(newContact);
    reset();
  };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      let normalizedName = name.toLowerCase();
      
      !contacts.find((contact) => contact.name.toLowerCase() === normalizedName) ? createNewContact(name, number) : toast.error(`${name} is already in contacts.`);
      e.target.name.focus();
    };

    const reset = () => {
      setName('');
      setNumber('');
    };

    

    
        
        return (
          <Form onSubmit={handleSubmit} autoFocus={true}>
              <label htmlFor='name'>Name</label>
              <input
                type="text"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                id='name'
                value={name}
                onChange={handleDataInput}
              />
              <label htmlFor='number'>Phone number</label>
              <input
                type="tel"
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                id='number'
                value={number}
                onChange={handleDataInput}
              />
              
              <button type='submit'>Add contact</button>
            </Form>
            );
    };


