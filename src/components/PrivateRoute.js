import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "redux/selectors";

export function PrivateRoute  ({
    component: Component,
    redirectTo ='/',
    
}){
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const isRedirect = !isLoggedIn && !isRefreshing;

    return isRedirect? <Navigate to={redirectTo}/> : Component;
       
    
}