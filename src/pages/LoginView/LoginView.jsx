import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "redux/Auth/operationsAuth";
// import Button from '@mui/material/Button';

import { FormDiv, FormLabel, MainDiv, Input, Button, Title } from "./LoginView.styled";


 const LoginView = () => {
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
       
         dispatch(operations.login({email, password}));
  
      setEmail ("");
     setPassword ("")
    }
return (
    <MainDiv>
        <FormDiv onSubmit={handleSubmit} autoComplete="off">
            <Title>Log in</Title>
        <FormLabel>Email
                    <Input 
                    type="text" 
                    name="email" 
                    required
                    value={email} 
                    onChange={handleChange}>
                    </Input>
                </FormLabel>
                <FormLabel>Password
                    <Input 
                    type="text" 
                    name="password" 
                    required
                    value={password} 
                    onChange={handleChange}>
                    </Input>
                </FormLabel>
                <Button type="submit">Log in</Button>
              
        </FormDiv>
    </MainDiv>
)
}

export default LoginView;