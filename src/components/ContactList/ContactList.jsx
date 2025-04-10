import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from 'react-redux';
import {selectFilteredContacts} from '../../redux/contactsSlice'

export default function ContactList() {
    // const contacts = useSelector(state => state.contacts.items);
    // const filter = useSelector(state => state.filters.name);
const users = useSelector(selectFilteredContacts);
   
 return (
        <ul className={css.contactListCard}>
          {users.map(user => (
            <li className={css.contactList} key={user.id}>
              <Contact  key={user.id}
                  id={user.id}
                  name={user.name}
                  number={user.number}  />
            </li>
          ))}
        </ul>
      );
    }
    // ======================

//     return (    
//         <ul className={css.contactListCard}>
//             {filter === ''
//         ? contacts.map((contact, index) => (   //I added index as it showed a message that id was not unique when li  key was contact.id
//             <li  className ={css.contactList} key={index}>
//               <Contact key={contact.id}
//                   id={contact.id}
//                   name={contact.name}
//                   number={contact.number} />
                
//             </li>
//           ))
//         : contacts
//             .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
//             .map(contact => (
//               <li  key={contact.id}>
//                 <Contact  
//                 key={contact.id}
//                   id={contact.id}
//                   name={contact.name}
//                   number={contact.number} />
//               </li>
//             ))}
//                 </ul>
        
//     );
//   }

