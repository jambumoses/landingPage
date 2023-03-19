import { createSlice } from "@reduxjs/toolkit";
import image from "../components/img/nobg/77f336891733e356d4d9c8a93ed9c942-removebg-preview.png";

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    messages:[
        {
            _id: 1,
            firstname:"john",
            lastname:"simeon",
            email: "jambcareer@gmail.com",
            subject:"feedback",
            message: "welcome to the first dashboard system designed by jambu moses, please enjoy bye nice day"
        },
        {
          _id: 2,
          firstname:"johnson",
          lastname:"lomude",
          email: "sigijohnvic@gmail.com",
          subject:"feedback",
          message: "welcome to the first dashboard system designed by jambu moses, please enjoy bye nice day"
      },
      {
        _id: 1,
        firstname:"jambu",
        lastname:"strio fet",
        email: "jumbogift32@gmail.com",
        subject:"feedback",
        message: "welcome to the first dashboard system designed by jambu moses, please enjoy bye nice day"
    }
    ]
  }, // end of slice object
  reducers: {},
});

export const messagesActions = messagesSlice.actions;
export default messagesSlice;
