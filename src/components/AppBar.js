import { useSelector } from "react-redux";
import {selectIsLoggedIn } from '../redux/Phonebook/selectors';
import UserMenu from './UserMenu'
import { Navigation } from "./Navigate";


export default function AppBar  () {
    const isLoggedIn=useSelector(selectIsLoggedIn); 
return (
   
        <div>
        <Navigation/>
         {isLoggedIn && <UserMenu /> }
        </div>
        
               
)
}
