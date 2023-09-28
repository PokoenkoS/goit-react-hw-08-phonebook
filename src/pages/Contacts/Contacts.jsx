import { useDispatch, useSelector } from "react-redux"
import {selectIsLoading, selectIsLoggedIn, selectIsRefreshing } from '../../redux/Phonebook/selectors';
import { useEffect } from "react";
import ContactList from "components/ContactList/ContactList";
import Form from "../../components/Form/Form";
import Filter from "../../components/Filter/Filter";
import { Loader } from "components/Loader";
import { fetchContacts } from "redux/Phonebook/operations";
import { Container, MainDiv,Title, Text } from "./Contacts.styled";

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
        <div>   
        <Title>Phonebook</Title>
        <Form/>
        </div> 
        <Container>
        <Text>Contacts</Text>
        <Filter/>
        <ContactList/>
        </Container>
        </MainDiv>
        </>
       
        }
        {isLoading&& <Loader/>}
        </>
    )
}
export default Contacts;