import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "redux/selectors";

export function PublickRoute({
    component: Component,
    redirectTo ='/login',
    
}){
    const isLoggedIn = useSelector(selectIsLoggedIn);
   
   return isLoggedIn ? <Navigate to={redirectTo}/> : Component;
}