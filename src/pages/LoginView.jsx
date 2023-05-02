import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "redux/Auth/operationsAuth";
import Button from '@mui/material/Button';
import { FormDiv, FormLabel, MainDiv, Input } from "../components/Main.styled";

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
    <MainDiv>
        <FormDiv onSubmit={handleSubmit} autoComplete="off">
            <h1>Login</h1>
        <FormLabel>Name
                    <Input 
                    type="text" 
                    name="email" 
                    required
                    value={email} 
                    onChange={handleChange}>
                    </Input>
                </FormLabel>
                <FormLabel>Email
                    <Input 
                    type="text" 
                    name="password" 
                    required
                    value={password} 
                    onChange={handleChange}>
                    </Input>
                </FormLabel>
                <Button type="submit" variant="outlined" size="medium"  >Login</Button>
              
        </FormDiv>
    </MainDiv>
)
}