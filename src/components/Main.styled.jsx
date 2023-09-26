import styled from '@emotion/styled'

export const MainDiv = styled.div`
margin-right: auto;
margin-left: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 40;
border-width: medium;
color: #010101;`

export const FormDiv = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
border: 3px solid black;
width: 400px;
height: 300px;
padding: 15px 30px;

`
export const FormLabel = styled.label`
width: 100px;
padding-left: 10px;
display: flex;
    flex-direction: column;
    margin-top: 8px;
`
export const Button = styled.button`
width: 150px;
padding-left: 10px;
color: blue;
margin-left: 10px;
margin-top: 10px;
cursor: pointer;
`
// export const Item = styled.li`
// list-style:none;
// font-size: 30px;
// color:black;
// `
export const Input = styled.input`
    margin-top: 8px;
    border-radius: 6px;
    box-shadow: 0px 2px 5px lightgrey;
    width: 250px;
    height: 30px;
`;