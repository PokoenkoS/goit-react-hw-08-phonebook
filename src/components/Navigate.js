import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/Phonebook/selectors';
import { MainDiv, Item } from './Main.styled';

import Button from '@mui/material/Button';

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MainDiv>
        <ul>
            {isLoggedIn 
            ?
            <Item><Button variant="contained"><NavLink variant="outlined" to = "/contacts">Contacts</NavLink></Button></Item>
        :
        <>
        <Item><Button variant="outlined"><NavLink to = "/login">Login</NavLink></Button>
          </Item>
        <Item><Button variant="outlined"><NavLink variant="contained"to = "/register">Register</NavLink></Button></Item>
        </>}
        </ul>
        
    </MainDiv>
  )

    
}