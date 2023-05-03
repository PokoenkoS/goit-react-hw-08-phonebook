import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterContact } from "redux/Phonebook/filterSlice";
import { selectFilter } from "redux/Phonebook/selectors";


const Filter = () =>{
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

 const handleFifter =(e)=> {
   
    dispatch(filterContact(e.currentTarget.value.toLowerCase()))
 }
   
    return (
        
<input type="text" value={filter} name="filter"  onChange={handleFifter} />

    )

}

export default Filter;