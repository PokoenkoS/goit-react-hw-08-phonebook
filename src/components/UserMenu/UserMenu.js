import { useDispatch, useSelector } from "react-redux";
import operations from "redux/Auth/operationsAuth";
import { selectToken, selectUser } from '../../redux/selectors';
import { MainDiv, Button } from "./UserMenu.styled";
// import Button from '@mui/material/Button';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(selectUser);
    const token = useSelector(selectToken)

    return(
        
        <MainDiv>
            <span>Welcome {name}!</span>
            <Button type="button" onClick ={()=> dispatch(operations.logout(token))}>LogOut</Button> 
        </MainDiv>
        
    )
}