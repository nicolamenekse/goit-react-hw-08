import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = "https://connections-api.goit.global/"


const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ""
}

export const register = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
    try {
        const response = await axios.post("/users/register", userData)
        setAuthHeader(response.data.token)
        console.log(response.data.token)
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})

export const login = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
    try {
        const response = await axios.post("/users/login", userData)
        setAuthHeader(response.data.token)
       
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        await axios.post("/users/logout")
        clearAuthHeader()
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/users/current")
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})

