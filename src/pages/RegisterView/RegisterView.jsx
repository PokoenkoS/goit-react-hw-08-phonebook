import { useState } from "react";
import { useDispatch } from "react-redux"
import operations from "../../redux/Auth/operationsAuth";
import { FormDiv, 
    FormLabel, 
    MainDiv, 
    Input, 
    Title, 
    Button } from "./RegisterView.styled";

const RegisterView =()=> {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = e => {
      
        const { name, value} = e.currentTarget;
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
      e.preventDefault();
dispatch(operations.register({name,email,password}));
setName  ("");
setEmail ("");
setPassword ("");
    }

    return(
        <MainDiv>
        <FormDiv autoComplete="off" onSubmit={hadleSubmit}>
            <Title> Register</Title>
               <FormLabel>Name
                    <Input
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={handleChange}>
                    </Input>
                </FormLabel>
                <FormLabel>Email
                    <Input 
                    type="text" 
                    name="email" 
                    value={email} 
                    onChange={handleChange}>
                    </Input>
                </FormLabel>
                <FormLabel>Password
                    <Input 
                    type="text" 
                    name="password" 
                    value={password} 
                    onChange={handleChange}>
                    </Input>
                </FormLabel>
                <Button type="submit">Register</Button>

        </FormDiv>
        </MainDiv>
    )
}

export default RegisterView;