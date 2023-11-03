import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { filterSelector } from 'redux/filter/filterSlice';
import { useGetContactsQuery } from "redux/contacts/contactsSlice";
import { ThreeDots } from 'react-loader-spinner';
import { Toaster } from 'react-hot-toast';
import { Home } from 'pages/home/Home';
import { Container } from './Container/Container';


export const App = () => {

  const filterValue = useSelector(filterSelector).value;
  const { data: contacts, isLoading } = useGetContactsQuery();

    
    return (
      <Container>
        <Home/>
        <div><Toaster/></div>
        <h2>Phonebook</h2>
        <ContactForm contacts={contacts}/>

        <h2>Contacts</h2>

        <Filter
          value={filterValue}
        />
        
        {isLoading ? (
        <ThreeDots/>
      ) : (
        <ContactList contacts={contacts} />
      )}


        

      </Container>
    );
  };
