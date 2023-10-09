import styled from '@emotion/styled';
import img from '../../image/phone-book-and-telephone-arrangement.jpg';

export const MainDiv = styled.div`
display: flex;
justify-content: center;
font-size: 40;
border-width: medium;
color: #010101;
min-height: 89vh;
background-image: url(${img});
background-repeat: no-repeat;
background-size: 100%;
background-position: center;

`

export const FormDiv = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
border: 3px solid #aee2e2;
border-radius: 30px;
width: 300px;
height: 300px;
margin-top:20px;
padding: 15px 30px;
@media screen and (min-width: 768px) {
width: 350px;
height: 400px;
  }

`
export const FormLabel = styled.label`
width: 160px;
padding-left: 10px;

display: flex;
flex-direction: column;
margin-top: 8px;
margin-left: 10px;
font-size: 15px;
font-weight: bold;
@media screen and (min-width: 768px) {
margin-left: 50px;
font-size: 25px;
  }
`

export const Input = styled.input`
margin-top: 8px;
border-radius: 6px;
border-color: #aee2e2;
width: 250px;
height: 30px;

`    

export const Button = styled.button`
    background-color: #aee2e2;
    width: 150px;
    padding: 10px;
    margin-left: 80px;
    border-radius: 6px;
    margin-top: 20px;
    &:hover{
        background-color: red;
        color:#aee2e2;
    }
    @media screen and (min-width: 768px) {
        margin-left: 120px;
        font-size: 20px;
  }
    
`

export const Title = styled.h2`
text-align: center;
font-family:Croissant One;
font-size: 30px;
`