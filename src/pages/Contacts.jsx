import { useDispatch, useSelector } from "react-redux"
import {selectIsLoading, selectIsLoggedIn, selectIsRefreshing } from '../redux/Phonebook/selectors';
import { useEffect } from "react";
import ContactList from "components/ContactList";
import Form from "../components/Form";
import Filter from "../components/Filter";
import { Loader } from "components/Loader";
import { fetchContacts } from "redux/Phonebook/operations";
import { MainDiv } from "components/Main.styled";

 const Contacts =() => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isLoading = useSelector(selectIsLoading);
    const isRefresh = useSelector(selectIsRefreshing);

    useEffect(()=> {
        if(!isRefresh){
            dispatch(fetchContacts());
        }
    },[dispatch, isRefresh]);

    return (
        <>
        {isLoggedIn&& !isRefresh &&
        <>
        <MainDiv>
            
        <h1>Phonebook</h1>
        <Form/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
        </MainDiv>
        </>
       
        }
        {isLoading&& <Loader/>}
        </>
    )
}
export default Contacts;