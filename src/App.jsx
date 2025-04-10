import SearchBox from "./components/SearchBox/SearchBox"
import ContactForm from "./components/ContactForm/ContactForm"
import ContactList from "./components/ContactList/ContactList"
import "./App.css"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import {  selectContacts, selectIsLoading, selectIsError
} from './redux/contactsSlice'


export default function App(){   

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


    return(<div>
        <h1>Phonebook</h1>
        <ContactForm/>
        <SearchBox/>
        {isLoading && <p>Loading</p>}
    {isError !== null && <p>Whoops, something goes wrong.</p>}
    {contacts.length > 0 && <ContactList />}
      </div>)
}


