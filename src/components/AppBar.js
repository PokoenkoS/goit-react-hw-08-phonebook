import { useSelector } from "react-redux";
import {selectIsLoggedIn } from '../redux/Auth/selectorsAuth';
import UserMenu from './UserMenu'
import AuthNav from './AuthNav'

export default function AppBar  () {
    const isLoggedIn=useSelector(selectIsLoggedIn); 
return (
   
    <div>
         {isLoggedIn ? <UserMenu /> : <AuthNav />}
        <h1>Header</h1>
    </div>
    
)
}
