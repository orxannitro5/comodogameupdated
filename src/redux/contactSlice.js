import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    error:""
};


export const fetchContacts = createAsyncThunk("fetchContacts", () => {
    return axios.get('http://localhost:4000/contacts')
        .then(response => response.data)
        .catch(error => {
            throw new Error(error.message || 'Failed to fetch contacts');
        });
});



export const addContact = createAsyncThunk("addContact", (newContact) => {
    return axios.post('http://localhost:4000/contacts', newContact)
        .then(response => response.data)
        .catch(error => error);
});


export const deleteContact = createAsyncThunk("deleteContact",  (data) => {
    return axios.delete(`http://localhost:4000/contacts/${data.id}`)
     .then(response=>response.data)
     .catch(err => err)
});

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.data = action.payload;
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
                state.data = state.data.filter(contact => contact.id !== action.payload.id);
            })
            .addCase(deleteContact.rejected, (state) => {
                state.error = "Error deleting contact";
            });
    },
});

export default contactSlice.reducer;