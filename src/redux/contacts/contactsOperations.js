import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/docs"

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts")
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err)
    }
})

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", contact)
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err)
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`)
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err)
    }
})

