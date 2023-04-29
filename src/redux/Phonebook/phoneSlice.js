import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = (state ) => {
    state.isLoading=true;
    state.error = null;
}
const handleFulfilled = (state, {payload}) => {
    state.isLoading= false;
    state.token = payload;
    state.error = null;
}
const handleRejected = (state,{payload}) => {
    state.isLoading= false;
    state.error = payload;
}

const handleFulfilledFetch = (state, {payload}) => {
    state.items= payload;
    state.token = payload.token;
    handleFulfilled(state)
}


const handleFulfilledAdd =(state, {payload}) => {
    state.items.push(payload);
    // state.token = payload.token;
    handleFulfilled(state)
}
const handleFullfilledDelete =(state, {payload}) => {
    state.items = state.items.filter(contact => contact.id !== payload);
    state.token = " ";
    handleFulfilled(state)
}

export const phoneSlice = createSlice({
    name:'contacts',
    initialState:  {
        items: [],
        isLoading: false,
        token: "",
        error: null
      },
          extraReducers:(builder)=>{
       builder
   
       .addCase(fetchContacts.fulfilled,handleFulfilledFetch)
       .addCase(addContact.fulfilled, handleFulfilledAdd)
       .addCase(deleteContact.fulfilled, handleFullfilledDelete)
       .addMatcher(isAnyOf(
        fetchContacts.pending,
        addContact.pending,
        deleteContact.pending
         ), handlePending)
         .addMatcher(isAnyOf(
            fetchContacts.rejected,
            addContact.rejected,
            deleteContact.rejected
         ), handleRejected)
    
    }
   
})


