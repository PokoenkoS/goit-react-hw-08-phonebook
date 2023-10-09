import React from "react";
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/Phonebook/operations";
import { selectFilteredContacts } from "redux/selectors";
import { Container, List, Item, Button, Text, Info } from "./ContactList.styled";
import Avatar from '@mui/material/Avatar';


const ContactList =()=> {
  const contacts = useSelector(selectFilteredContacts);
   const dispatch = useDispatch();
  
       return (
    <Container>
    <List>
    {contacts.map((contact) =>{
      return (
    <Item key={contact.id}>
      <Info>
      <Avatar 
      alt={contact.name}
      src = {
       `https://ui-avatars.com/api/?name=${contact.name[0]}&length=1&background=random&size=262`
      }
     >
       
      </Avatar>
      <Text>
      {contact.name}
      <span>{contact.number}</span>
      </Text>
   
      </Info>
    <Button type="submit" onClick ={()=> dispatch(deleteContact(contact.id))}>Delete</Button> 
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
  