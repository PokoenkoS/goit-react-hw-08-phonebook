import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/Phonebook/selectors';
import { MainDiv } from './Main.styled';

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MainDiv>
        <ul>
            {isLoggedIn ?
            <li><NavLink to = "/contacts">Contacts</NavLink></li>
        :
        <>
        <li><NavLink to = "/login">Login</NavLink></li>
        <li><NavLink to = "/register">Register</NavLink></li>
        </>}
        </ul>
        
    </MainDiv>
  )

    
}