
import { lazy, useEffect} from "react";
import operations from "../redux/Auth/operationsAuth";
import { useDispatch, useSelector} from "react-redux";
import { selectIsRefreshing } from "redux/Phonebook/selectors";
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from "./PrivateRoute";
import { PublickRoute } from "./PublickRoute";
import { Layout } from "./Layout";

const Home = lazy(()=> import ('../pages/Home/Home'));
const Contacts = lazy(()=> import ('../pages/Contacts/Contacts'));
const LoginView = lazy(()=> import('../pages/LoginView/LoginView'));
const RegisterView = lazy(()=> import('../pages/RegisterView/RegisterView'))



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
      <Route path ='/' element ={<Layout/>}>
        <Route index element ={<Home/>}/>
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

