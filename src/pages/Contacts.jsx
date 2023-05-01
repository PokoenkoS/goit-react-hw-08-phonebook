import { useDispatch, useSelector } from "react-redux"
import {selectIsLoading, selectIsLoggedIn, selectIsRefreshing } from '../redux/Phonebook/selectors';
import { useEffect } from "react";
import fetchCurrentUser from "../redux/Auth/operations"
import ContactList from "components/ContactList";
import Form from "components/ContactList";
import Filter from "components/ContactList";
import { Loader } from "components/Loader";

export const Contacts =() => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isLoading = useSelector(selectIsLoading);
    const isRefresh = useSelector(selectIsRefreshing);

    useEffect(()=> {
        if(!isRefresh){
            dispatch(fetchCurrentUser());
        }
    },[dispatch, isRefresh]);

    return (
        <>
        {isLoggedIn&& !isRefresh &&
        <>
        <h1>Phonebook</h1>
        <Form/>
        <Filter/>
        <ContactList/>
        </>
       
        }
        {isLoading&& <Loader/>}
        </>
    )
}