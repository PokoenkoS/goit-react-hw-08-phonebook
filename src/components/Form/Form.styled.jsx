import styled from '@emotion/styled'

export const FormDiv = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
border: 3px solid #aee2e2;
border-radius: 30px;
width: 200px;
height: 200px;
padding: 15px 30px;
margin-top: 20px;
@media screen and (min-width: 768px) {
    width: 190px;
height: 130px;
  }
`
export const FormLabel = styled.label`
width: 100px;
display: flex;
flex-direction: column;
margin-top: 8px;
font-size: 12px;
font-weight: bold;
@media screen and (min-width: 768px) {
    /* width: 50px; */
    font-size: 12px;

  }
`

export const Input = styled.input`
margin-top: 8px;
border-radius: 6px;
border-color: #aee2e2;
width: 200px;
height: 30px;
@media screen and (min-width: 768px) {
    width: 120px;
height: 23px;
  }

`    

export const Button = styled.button`
    background-color: #aee2e2;
    width: 100px;
    padding: 10px;
    margin-top: 10px;
    margin-left: 50px;
    margin-bottom: 10px;
    border-radius: 6px;
    font-size: 10px;
    &:hover{
        background-color: red;
        color:#aee2e2;
    }
    @media screen and  (min-width: 768px) {
    width: 150px;
    /* height: px; */
    font-size: 12px;
    padding: 5px;
    margin-left: 30px;
  }
    
`