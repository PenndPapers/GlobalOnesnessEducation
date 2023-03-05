import { createAsyncThunk } from "@reduxjs/toolkit";
import * as AuthApi from "../../api/AuthApi.js";

export const studentLogin = createAsyncThunk(
    "Auth/studentLoginReq",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await AuthApi.studentLogin(formData);
            return response.data;
        } catch (error) {
           throw rejectWithValue(error.response.data);
        }
    }
);

export const changeStudentPassword = createAsyncThunk(
    "Auth/changeStudentPasswordReq",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await AuthApi.ChangePassword(formData)
            return response.data;
        } catch (error) {
            throw rejectWithValue(error.response.data);
        }
    }
);





export const adminLogin = createAsyncThunk(
    "Auth/adminLoginReq",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await AuthApi.adminLogin(formData);
            return response.data;
        } catch (error) {
            throw rejectWithValue(error.response.data);
        }
    }
);

export const teacherLogin = createAsyncThunk(
    "Auth/teacherLoginReq",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await AuthApi.teacherLogin(formData);
            return response.data;
        } catch (error) {
            throw rejectWithValue(error.response.data);
        }
    }
);

