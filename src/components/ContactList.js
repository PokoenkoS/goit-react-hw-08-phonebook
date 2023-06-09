import React from "react";
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/Phonebook/operations";
import { selectFilteredContacts } from "redux/Phonebook/selectors";
import Button from '@mui/material/Button';

const ContactList =()=> {


  const contacts = useSelector(selectFilteredContacts);
 
  const dispatch = useDispatch();
  

       return (
    <div>
    
    <ul>
    {contacts.map((contact) =>{
      return (
    <li key={contact.id}>
    {contact.name}:{contact.number}
    {/* <button type="submit" onClick={()=> dispatch(deleteContact(contact.id))}> Delete</button> */}
    <Button type="submit" variant="outlined"  onClick ={()=> dispatch(deleteContact(contact.id))}>Delete</Button> 
    </li>
    )
    })}
    </ul>
  </div> 
)
};


ContactList.propTypes = {
  contacts: PropTypes.array,
}

export default ContactList;
  