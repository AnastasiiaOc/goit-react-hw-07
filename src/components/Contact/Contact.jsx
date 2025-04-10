import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import css from "../Contact/Contact.module.css";

import { deleteContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';


    export default function Contact({id, name, number}){

        const dispatch = useDispatch();
        const handleDeleteContact = () => {
            dispatch(deleteContact(id));
          };
    return(
        <div className={css.contact}>
            <div className={css.cardText}>
            <p><IoPerson className={css.icon} size="20" />{name}</p>
            <p><FaPhone className={css.icon} size="20" />{number}</p>
            </div>
        
            <button type="button" className={css.contactBtn} onClick={handleDeleteContact}>Delete</button>
        </div>
    )

}

