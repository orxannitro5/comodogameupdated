import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    loading: false,
    error: ""
};

export const fetchContacts = createAsyncThunk("fetchContacts", async () => {
    const response = await axios.get(`http://localhost:4000/contacts`);
    return response.data;
});

export const addContact = createAsyncThunk("addContact", async (newContact) => {
    const response = await axios.post(`http://localhost:4000/contacts`, newContact);
    return response.data;
});

export const deleteContact = createAsyncThunk("deleteContact", async (id) => {
    await axios.delete(`http://localhost:4000/contacts/${id}`);
    return id;
});

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.loading = false;
                state.error = "Error fetching data";
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            
            .addCase(addContact.rejected, (state) => {
                state.error = "Error adding contact";
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.data = state.data.filter(contact => contact.id !== action.payload);
                console.log(action.payload);
            })
            .addCase(deleteContact.rejected, (state) => {
                state.error = "Error deleting contact";
            });
    },
});

export default contactSlice.reducer;