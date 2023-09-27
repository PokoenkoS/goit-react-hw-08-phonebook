import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/Phonebook/selectors';
import { MainDiv, Item, List } from './Navigate.styled';
import Button from '@mui/material/Button';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MainDiv>
        <List>
            {isLoggedIn 
            ?
            <>
            <Item><Button variant="contained"><StyledLink variant="outlined" to = "/">Home</StyledLink></Button></Item>
            <Item><Button variant="contained"><StyledLink variant="outlined" to = "/contacts">Contacts</StyledLink></Button></Item>
            </>
        :
        <>
        <Item><Button variant="outlined"><StyledLink variant="outlined" to = "/">Home</StyledLink></Button></Item>
        <Item><Button variant="outlined"><StyledLink to = "/login">Login</StyledLink></Button></Item>
        <Item><Button variant="outlined"><StyledLink variant="contained"to = "/register">Register</StyledLink></Button></Item>
        </>}
        </List>
        
    </MainDiv>
  )

    
}