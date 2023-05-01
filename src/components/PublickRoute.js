import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { selectIsLoggedIn } from "redux/Phonebook/selectors";

export function PublickRoute({
    component: Component,
    redirectTo ='/login',
    
}){
    const isLoggedIn = useSelector(selectIsLoggedIn);
   
   return isLoggedIn ? <Navigate to={redirectTo}/> : Component;
}