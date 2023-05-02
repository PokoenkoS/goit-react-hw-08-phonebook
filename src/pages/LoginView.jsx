import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "redux/Auth/operationsAuth";

export default function LoginView () {
    const dispatch = useDispatch();
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     const handleChange = e => {
     
        const { name, value } = e.currentTarget;
        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                return;
        };
    };
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e);
         dispatch(operations.login({email, password}));
  
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
                    required
                    value={email} 
                    onChange={handleChange}>
                    </input>
                </label>
                <label>Email
                    <input 
                    type="text" 
                    name="password" 
                    required
                    value={password} 
                    onChange={handleChange}>
                    </input>
                </label>
                <button type="submit">Login</button>
        </form>
    </div>
)
}