import { useSelector } from "react-redux";
import {selectIsLoggedIn } from '../redux/Phonebook/selectors';
import UserMenu from './UserMenu'
// import AuthNav from './AuthNav'
import { Navigation } from "./Navigate";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "./Loader";

export default function AppBar  () {
    const isLoggedIn=useSelector(selectIsLoggedIn); 
return (
   
    <div>
        <Navigation/>
         {isLoggedIn &&<UserMenu /> }
         <Suspense fallback = {<Loader/>}>
         <Outlet/>
         </Suspense>
           </div>
    
)
}
