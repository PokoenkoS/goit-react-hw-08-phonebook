import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { selectIsLoggedIn, selectIsRefreshing } from "redux/Phonebook/selectors";

export function PrivateRoute  ({
    component: Component,
    redirectTo ='/',
    
}){
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const isRedirect = !isLoggedIn && !isRefreshing;

    return ( isRedirect? <Navigate to={redirectTo}/> : Component
       
    )
}