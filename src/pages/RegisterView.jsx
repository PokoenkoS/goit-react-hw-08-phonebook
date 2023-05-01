import { useState } from "react";
import { useDispatch } from "react-redux"
import operations from "../redux/Auth/operations";

export default function RegisterView() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({target:{name, value}}) =>{
        switch (name){
         case 'name':
         return setName(value);
         case 'email':
         return setEmail(value);
         case 'password':
         return setPassword(value);
         default:
         return;
        }
        
    }

    const hadleSubmit = (e) =>{
        e.prevenDefault();
dispatch(operations.register({name,email,password}));
setName  ("");
setEmail ("");
setPassword ("");
    }

    return(
        <div>
            <h1> Registration</h1>
            <form autoComplete="off" onSubmit={hadleSubmit}>
                <label>Name
                    <input
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={handleChange}>
                    </input>
                </label>
                <label>Email
                    <input 
                    type="text" 
                    name="email" 
                    value={email} 
                    onChange={handleChange}>
                    </input>
                </label>
                <label>Password
                    <input 
                    type="text" 
                    name="password" 
                    value={password} 
                    onChange={handleChange}>
                    </input>
                </label>
<button type="submit"> Registration</button>
            </form>
        </div>
    )
}