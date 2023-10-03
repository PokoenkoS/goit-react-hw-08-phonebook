import styled from '@emotion/styled'

export const Container = styled.div`
  /* @media (max-width: 768px) {
 width:768px;

  } */
`

export const List = styled.ul`
    justify-content: space-around; 
  padding:0;
 

`

export const Item = styled.li`
width: 400px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
  width:300px;

  }
`
export const Info = styled.div`
      display: flex;
`

export const Text = styled.p`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
    
`

export const Button = styled.button`
    background-color: #aee2e2;
    width: 100px;
    padding: 10px;
    margin-left: 30px;
    margin-bottom: 10px;
    border-radius: 6px;
    &:hover{
        background-color: red;
        color:#aee2e2;
    }
    
`