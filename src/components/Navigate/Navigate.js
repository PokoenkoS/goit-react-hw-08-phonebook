import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/Phonebook/selectors';
import { MainDiv, Item, List, Container } from './Navigate.styled';
import Button from '@mui/material/Button';

const StyledLink = styled(NavLink)`
  color: black;
  width: 100px;
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
  text-decoration: none;
   

  &.active {
    color: red;
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
            <Item><Button variant="text"><StyledLink variant="outlined" to = "/">Home</StyledLink></Button></Item>
            <Item><Button variant="text"><StyledLink variant="outlined" to = "/contacts">Contacts</StyledLink></Button></Item>
            </>
        :
        <>
        <Item><Button variant="text"><StyledLink variant="outlined" to = "/">Home</StyledLink></Button></Item>
        <Container>
        <Item><Button variant="text"><StyledLink to = "/login">Log in</StyledLink></Button></Item>
        <Item><Button variant="text"><StyledLink variant="contained"to = "/register">Register</StyledLink></Button></Item>
        </Container>
        </>}
        </List>
        
    </MainDiv>
  )

    
}