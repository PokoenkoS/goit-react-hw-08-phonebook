
import { useEffect} from "react";
import operations from "../redux/Auth/operationsAuth";
import { useDispatch, useSelector} from "react-redux";
import AppBar from "./AppBar"
import { selectIsRefreshing } from "redux/Phonebook/selectors";
import { Route, Routes } from 'react-router-dom';
import {Contacts} from "../pages/Contacts"
import LoginView from "pages/LoginView";
import RegisterView from "pages/RegisterView";
import { PrivateRoute } from "./PrivateRoute";
import { PublickRoute } from "./PublickRoute";

export const App = () => {
const dispatch = useDispatch();
const isRefreshing = useSelector(selectIsRefreshing);


useEffect(() => {
  dispatch(operations.fetchCurrentUser());
}, [dispatch]);

  return isRefreshing ? (
  <b>Refreshing user...</b>
  ) : (
   
    <Routes>
      <Route path ='/' element ={<AppBar/>}>
      <Route
       path = 'contacts'
       element ={
      <PrivateRoute redirectTo="/login" component ={<Contacts/>}/>
    }/>
      <Route
       path = 'login'
       element ={
      <PublickRoute redirectTo="/contacts" component ={<LoginView/>}/>
    }/>
     <Route
       path = 'register'
       element ={
      <PublickRoute redirectTo="/contacts" component ={<RegisterView/>}/>
    }/>
      
      
      </Route>
    </Routes>
  
  );
};

