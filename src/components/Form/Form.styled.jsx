import styled from '@emotion/styled'

export const FormDiv = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
border: 3px solid #aee2e2;
border-radius: 30px;
width: 250px;
height: 200px;
padding: 15px 30px;
margin-top: 20px;

`
export const FormLabel = styled.label`
width: 100px;
display: flex;
flex-direction: column;
margin-top: 8px;
font-size: 20px;
font-weight: bold;
`

export const Input = styled.input`
margin-top: 8px;
border-radius: 6px;
border-color: #aee2e2;
width: 200px;
height: 30px;

`    

export const Button = styled.button`
    background-color: #aee2e2;
    width: 150px;
    padding: 10px;
    margin-top: 10px;
    margin-left: 30px;
    margin-bottom: 10px;
    border-radius: 6px;
    &:hover{
        background-color: red;
        color:#aee2e2;
    }
    
`