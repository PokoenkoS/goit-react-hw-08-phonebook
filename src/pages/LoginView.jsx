import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "redux/Auth/operations";

export default function LoginView () {
    const dispatch = useDispatch();
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange= ({target:{name, value}}) =>{
        switch (name){
         case 'email':
         return setEmail(value);
         case 'password':
         return setPassword(value);
         default:
         return;
        }
        
    }
    const handleSubmit = (e) =>{
        console.log(e);
        e.prevenDefault();
        console.log('hello');
dispatch(operations.login({email, password}));
console.log('hello');
setEmail ("");
setPassword ("")
    }
return (
    <div>
        <form onSubmit={handleSubmit} autoComplete="off">
            <h1>Login</h1>
        <label>Name
                    <input 
                    type="text" 
                    name="email" 
                    value={email} 
                    onChange={handleChange}>
                    </input>
                </label>
                <label>Email
                    <input 
                    type="text" 
                    name="password" 
                    value={password} 
                    onChange={handleChange}>
                    </input>
                </label>
                <button type="submit">Login</button>
        </form>
    </div>
)
}