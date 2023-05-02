import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/Phonebook/selectors';
import { MainDiv, Item } from './Main.styled';

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MainDiv>
        <ul>
            {isLoggedIn 
            ?
            <Item><NavLink to = "/contacts">Contacts</NavLink></Item>
        :
        <>
        <Item><NavLink to = "/login">Login</NavLink></Item>
        <Item><NavLink to = "/register">Register</NavLink></Item>
        </>}
        </ul>
        
    </MainDiv>
  )

    
}