import { useDispatch, useSelector } from "react-redux";
import operations from "redux/Auth/operations";
import { selectUser } from '../redux/Phonebook/selectors';
import ContactList from "./ContactList";
import Filter from "./Filter";
import Form from "./Form";

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(selectUser);

    return(
        <div>
            <span>Welcome!!! ${name}</span>
            <button type="button"> onClick ={()=> dispatch(operations.logout())}
           LogOut
            </button>
            <h1>Phonebook</h1>
     <Form />
     <h2>Contacts</h2>
     <Filter/>
            <ContactList/> 
        </div>
        
    )
}