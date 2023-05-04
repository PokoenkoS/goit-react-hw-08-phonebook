import { createAsyncThunk } from "@reduxjs/toolkit";



import axios from "axios";

axios.defaults.baseURL= 'https://connections-api.herokuapp.com/';


const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/registr',
 async(credentials,{ rejectWithValue })=> {
    try {
        const {data} = await axios.post('/users/signup', credentials);
        setAuthHeader(data.token); 
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})


export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const {data} = await axios.post('/users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async ({ rejectWithValue }) => {
      try {
        await axios.post('/users/logout');
        clearAuthHeader();
        
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const fetchCurrentUser = createAsyncThunk('auth/refresh', async(_,thunkAPI)=>{
   
       

    const state = thunkAPI.getState();
    const token = state.auth.token;

    if(token === null) {
        return thunkAPI.rejectWithValue();
    };
    setAuthHeader(token);
    try {
         const {data} = await axios.get('/users/current');
        return data;
     
     
    } catch(error){
        return thunkAPI.rejectWithValue(error.message);
    }
})



const operations = {
    register,
    login,
    logout,
    fetchCurrentUser,
};

export default operations;