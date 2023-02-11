import { createAsyncThunk } from "@reduxjs/toolkit";
import * as AuthApi from "../../api/AuthApi.js";

export const studentLogin = createAsyncThunk(
    "Auth/studentLoginReq",
    async (formData, {rejectWithValue}) => {
        try {
            const response = await AuthApi.studentLogin(formData);
            return response.data;
        } catch (error) {
            console.log(error);
            if(error.response && error.response.data){
                return rejectWithValue(error.response.data);
            }else{
                return rejectWithValue(error.message);
            }
        }
    }
);


