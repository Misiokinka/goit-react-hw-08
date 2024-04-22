import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestAddContact,
  requestDeleteContact,
  requestGetContacts,
  setToken,
} from "../../services/contactsAuthApi";

export const  apiGetUserContacts = createAsyncThunk(
  "contact/get",
  async (_, thunkAPI) => {

    const state = thunkAPI.getState();

    const token = state.auth.token;
    setToken(token);
    try {
      const data = await requestGetContacts();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const apiAddContact = createAsyncThunk(
  "contact/add",
  async (contactData, thunkAPI) => {
    try {
      const data = await requestAddContact(contactData);
      return data;
    } catch {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const apiDeleteContact = createAsyncThunk(
  "contact/delete",
  async (contactId, thunkAPI) => {
    try {
      const data = await requestDeleteContact(contactId);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
