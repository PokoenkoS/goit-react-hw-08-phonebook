import styled from '@emotion/styled';
import img from '../../image/phone-book-and-telephone-arrangement.jpg';

export const MainDiv = styled.div`
width: 420px;
display: flex;
justify-content: center;
/* align-items: center; */
padding-top: 30px;
font-size: 40;
border-width: medium;
min-height: 89vh;
background-image: url(${img});
background-repeat: no-repeat;
background-size: 100%;
background-position: center;

@media screen and (max-width: 1400px) {
    /* width: 1400px;
    height: 1460px; */
   
  }

`

export const FormDiv = styled.form`
display: flex;
flex-direction: column;
padding: 15px 30px;
/* justify-content: space-around; */
border: 3px solid #aee2e2;
border-radius: 30px;
width: 250px;
height: 250px;
padding: 5px 3px;
@media screen and (min-width: 768px) {
   
    /* width: 1400px;
    height: 1460px; */
    width: 400px;
height: 300px;
    }

`
export const FormLabel = styled.label`
width: 160px;
padding-left: 10px;
display: flex;
flex-direction: column;
margin-top: 8px;
margin-left: 10px;
font-size: 20px;
font-weight: bold;
@media screen and (min-width: 768px) {
width: 100px;
padding-left: 10px;
margin-left: 50px;
}
`

export const Input = styled.input`
margin-top: 8px;
border-radius: 6px;
border-color: #aee2e2;
width: 200px;
height: 30px;
@media screen and (min-width: 768px) {
    
    width: 250px;
    height: 30px;
    }
`    

export const Button = styled.button`
    background-color: #aee2e2;
    width: 100px;
    padding: 10px;
    margin-left: 80px;
    margin-top:20px;
    border-radius: 6px;
    &:hover{
        background-color: red;
        color:#aee2e2;
    }
    @media screen and (min-width: 768px) {
        width: 150px;
        margin-left: 120px;
  
    }
`

export const Title = styled.h2`
text-align: center;
font-family:Croissant One;
font-size: 35px;
`