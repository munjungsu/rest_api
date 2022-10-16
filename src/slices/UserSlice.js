import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getUser = createAsyncThunk("getUser_", async(payload, {rejectWithValue})=>{
    let result = null;
    try {
        result = await axios.get('http://localhost:3001/destinations')
    }catch(err){
        result = rejectWithValue(err.message);
    }
    return result;
});
export const setUser = createAsyncThunk("setUser_", async(body, {rejectWithValue})=>{
    let result = null;
    try {
        result = await axios.post('http://localhost:3001/destinations', body)
    }catch(err){
        result = rejectWithValue(err.message);
    }
    return result;
});

export const userSlice = createSlice({
    name : 'user',
    initialState : {
        id : '',
        name: '',
        category: {
          type: "person",
          power: 100
        },
        data : []
    },
    reducers : {},
    extraReducers : {
        [getUser.pending] : (state, {payload})=>{
            return {
                ...state,
            }
        },
        [getUser.fulfilled] : (state, {payload})=>{
            if(payload.data.name){
                 payload.data.map((v)=> v.name = 'no')
            }
            return {
                ...state,
                id : payload.data.id,
                name : payload.data.name,
                category : {
                    type : payload.data.type,
                    power : payload.data.power
                },
                data : payload.data
            }
        },
        [getUser.rejected] : (state, {payload})=>{
            return {
                ...state
            }
        },
        [setUser.fulfilled] : (state, {payload})=>{
            return {
                ...state
            }
         
        },
        [setUser.rejected] : (state, {payload})=>{
            return {
                ...state,
               
            }
        },
    }
});
export default userSlice.reducer;