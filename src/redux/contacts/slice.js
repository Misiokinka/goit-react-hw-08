import { createSlice,  isAnyOf } from "@reduxjs/toolkit";
import {
  apiAddContact,
  apiDeleteContact,
  apiGetUserContacts,
} from "./operations";
import { apiLogoutUser } from "../auth/operations";

const CONTACTS_INITIAL_STATE = {
  contacts: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: CONTACTS_INITIAL_STATE,

  extraReducers: (builder) =>
    builder

      .addCase(apiGetUserContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })

      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts.push(action.payload);
      })

      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(apiLogoutUser.fulfilled, (state) => {
        state.contacts = [];
      })

      .addMatcher(
        isAnyOf(
          apiGetUserContacts.pending,
          apiAddContact.pending,
          apiDeleteContact.pending
        ),
        state => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          apiGetUserContacts.rejected,
          apiAddContact.rejected,
          apiDeleteContact.rejected
        ),
        state => {
          state.loading = false;
          state.error = true;
        }
      ),
});


export const contactsReducer = contactsSlice.reducer;
