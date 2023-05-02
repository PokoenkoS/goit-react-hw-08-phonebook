import { useDispatch, useSelector } from "react-redux";
import operations from "redux/Auth/operationsAuth";
import { selectToken, selectUser } from '../redux/Phonebook/selectors';
import { MainDiv } from "./Main.styled";

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(selectUser);
    const token = useSelector(selectToken)

    return(
        
        <MainDiv>
            <span>Welcome!!! {name}</span>
            <button type="button" onClick ={()=> dispatch(operations.logout(token))}>
           LogOut
            </button>
                    
        </MainDiv>
        
    )
}