import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
  name: "emails",
  initialState: {
    emails: [
        {_id: 1, mail: "jambcareer@gmail.com"},
        {_id: 1, mail: "jumbogift32@gmail.com"},
        {_id: 1, mail: "johnsonvic@gmail.com"}

    ]
  }, // end of slice object
  reducers: {},
});

export const emailActions = emailSlice.actions;
export default emailSlice;
