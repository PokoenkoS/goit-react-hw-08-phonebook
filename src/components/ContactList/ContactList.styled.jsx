import styled from '@emotion/styled'

export const Container = styled.div`
   
`

export const List = styled.ul`
  padding:0;
    text-align: center;

`

export const Item = styled.li`
width: 400px;
    display: flex;
    justify-content: space-around;
    /* text-align: center; */
     /* align-items: center; */
`
export const Text = styled.p`
    display: flex;
    flex-direction: column;
`

export const Button = styled.button`
    background-color: #aee2e2;
    width: 100px;
    padding: 10px;
    /* margin-top: 10px; */
    margin-left: 30px;
    margin-bottom: 10px;
    border-radius: 6px;
    &:hover{
        background-color: red;
        color:#aee2e2;
    }
    
`