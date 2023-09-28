import React from "react";
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/Phonebook/operations";
import { selectFilteredContacts } from "redux/Phonebook/selectors";
import Button from '@mui/material/Button';
import { Container, List, Item } from "./ContactList.styled";

const ContactList =()=> {


  const contacts = useSelector(selectFilteredContacts);
 
  const dispatch = useDispatch();
  

       return (
    <Container>
    
    <List>
    {contacts.map((contact) =>{
      return (
    <Item key={contact.id}>
    {contact.name}:{contact.number}
    {/* <button type="submit" onClick={()=> dispatch(deleteContact(contact.id))}> Delete</button> */}
    <Button type="submit" variant="outlined"  onClick ={()=> dispatch(deleteContact(contact.id))}>Delete</Button> 
    </Item>
    )
    })}
    </List>
  </Container> 
)
};


ContactList.propTypes = {
  contacts: PropTypes.array,
}

export default ContactList;
  