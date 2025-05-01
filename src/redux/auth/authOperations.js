import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = "https://connections-api.goit.global/"


const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ""
}

export const register = createAsyncThunk("auth/signup", async (userData, thunkAPI) => {
    console.log("gönderilenveri ",JSON.stringify(userData))
    try {
        const response = await axios.post("/users/signup", userData)
        if (response.data.token) {

            setAuthHeader(response.data.token)
            console.log(response.data.token)
            
        } else {
            console.log("token yok")
            return thunkAPI.rejectWithValue("token bulunamadı abe")
        }

        return response.data
    } catch (err) {
        console.log("abe hata tam olarak burada", err)
        return thunkAPI.rejectWithValue(err.message)
    }
})

export const login = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
    try {
        const response = await axios.post("/users/login", userData)
        setAuthHeader(response.data.token)

        return response.data
    } catch (err) {
        console.log("abe hata tam olarak burada222", err)
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

export const refresh = createAsyncThunk("auth/current", async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const token = state.auth.token
    if (!token) return thunkAPI.rejectWithValue("token yook")
    setAuthHeader(token)

    try {
        const response = await axios.get("/users/current")
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})

