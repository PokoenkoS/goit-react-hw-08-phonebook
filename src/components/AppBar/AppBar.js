import { useSelector } from "react-redux";
import {selectIsLoggedIn } from '../../redux/Phonebook/selectors';
import UserMenu from '../UserMenu/UserMenu'
import { Navigation } from "../Navigate/Navigate";
import { Container } from "./AppBar.styled";


export default function AppBar  () {
    const isLoggedIn=useSelector(selectIsLoggedIn); 
return (
   
        <Container>
        <Navigation/>
         {isLoggedIn && <UserMenu /> }
        </Container>
        
               
)
}
