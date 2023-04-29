import { createSlice } from "@reduxjs/toolkit";
import operations from './operations'

const handleFulfilled =(state, action)=> {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
}

const handleFulfilledLogout =(state)=> {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
}

const handleFulfilledFetch =(state, action)=> {
    state.user = action.payload;
    state.isLoggedIn = true;
}

 const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user:{ name: null, email: null},
        token: null,
        isLoggedIn: false,
    },
extraReducers:(builder) => {
    builder
    .addCase(operations.register.fulfilled, handleFulfilled)
    .addCase(operations.login.fulfilled, handleFulfilled)
    .addCase(operations.logout.fulfilled, handleFulfilledLogout)
    .addCase(operations.fetchCurrentUser.fulfilled,handleFulfilledFetch)
}
})

export const authSliceReducer = authSlice.reducer;
    