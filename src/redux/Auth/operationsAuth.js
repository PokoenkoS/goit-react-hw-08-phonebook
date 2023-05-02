import { createAsyncThunk } from "@reduxjs/toolkit";
import * as fetchApiAuth from "redux/Auth/ApiAuth";

export const register = createAsyncThunk('auth/registr',
 async(data)=> {
    try {
        const responce = await fetchApiAuth.register(data);
        return responce
    } catch (error) {
        console.log(error);
    }
})

export const login = createAsyncThunk('auth/login', async(data)=> {
    try {
        const responce = await fetchApiAuth.login(data);
        return responce
    } catch (error) {
        console.log(error);
    }
})

export const logout = createAsyncThunk('auth/logout', async()=>{
    try {
        await fetchApiAuth.logout();
    } catch (error) {
        console.log(error);
    }

    
})

export const fetchCurrentUser = createAsyncThunk('auth/refresh', async(_,thunkAPI)=>{
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if(token === null) {
        return;
    };
    
    try {
        const response = await fetchApiAuth.fetchCurrentUser(token);
        return response;
    } catch(error) {
      console.log(error);
    }
})

const operations = {
    register,
    login,
    logout,
    fetchCurrentUser,
};

export default operations;