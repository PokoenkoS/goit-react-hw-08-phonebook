import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL= 'http://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

const register = createAsyncThunk('auth/register',async credentials => {
    try {
        const {data} = await axios.post('/users/singup', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        
    }
    
});

const login = createAsyncThunk('auth/login', async credentials =>{
    try {
        const {data} = await axios.post('/user/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        
    }
});

const logout = createAsyncThunk('auth/logout', async () =>{
    try {
        const {data} = await axios.post('/user/logout');
        token.unset();
        return data;
    } catch (error) {
        
    }
});

const  fetchCurrentUser = createAsyncThunk('auth/refresh', async(_, thunkAPI) =>{
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken ===null){
        return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
        const {data} = await axios.get('/users/current'); 
        return data
    } catch (error) {
      console.log(error);  
    }
});

const operations = {
    register,
    login,
    logout,
    fetchCurrentUser,
};

export default operations;