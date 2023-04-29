import { useDispatch, useSelector } from "react-redux";
import operations from "redux/Auth/operations";
import { selectUser } from "redux/Auth/selectorsAuth";

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(selectUser);

    return(
        <div>
            <span>Welcome!!! ${name}</span>
            <button type="button"> onClick ={()=> dispatch(operations.logout())}
           LogOut
            </button>
        </div>
    )
}