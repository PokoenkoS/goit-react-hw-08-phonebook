import styled from '@emotion/styled'

export const MainDiv = styled.div`
/* margin-right: auto;
margin-left: auto; */
/* display: flex; */
/* flex-direction: column;
justify-content: center;
align-items: center; */
/* font-size: 40; */
/* border-width: medium; */
/* color: #010101; */
`

// export const FormDiv = styled.form`
// display: flex;
// flex-direction: column;
// justify-content: space-around;
// border: 3px solid #aee2e2;
// border-radius: 30px;
// width: 200px;
// height: 150px;
// padding: 15px 30px;

// `
// export const FormLabel = styled.label`
// width: 100px;
// padding-left: 10px;
// display: flex;
//     flex-direction: column;
//     margin-top: 8px;
// `
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

/* padding-left: 10px; */
display: flex;
flex-direction: column;
margin-top: 8px;
/* margin-left: 50px; */
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