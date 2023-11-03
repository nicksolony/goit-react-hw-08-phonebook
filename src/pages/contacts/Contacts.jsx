
import { ThreeDots } from 'react-loader-spinner';
import { Toaster } from 'react-hot-toast';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { filterSelector } from 'redux/filter/filterSlice';
import { useGetContactsQuery } from "redux/contacts/contactsSlice";

export const Contacts = () => {

    const filterValue = useSelector(filterSelector).value;
    const { data: contacts, isLoading } = useGetContactsQuery();

    return (
        <div>
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
        </div>
    );

};