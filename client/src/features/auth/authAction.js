import { createAsyncThunk } from "@reduxjs/toolkit";
import * as AuthApi from "../../api/AuthApi.js";

export const studentLogin = createAsyncThunk(
    "Auth/studentLoginReq",
    async (formData, { rejectWithValue }) => {
        try {
            console.log("inside studentLogin")
            const response = await AuthApi.studentLogin(formData);
            return response.data;
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
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
            if (error.response && error.response.data) {
                alert(error.response.data.error)
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);





export const adminLogin = createAsyncThunk(
    "Auth/adminLoginReq",
    async (formData, { rejectWithValue }) => {
        try {
            console.log("inside adminLogin")
            const response = await AuthApi.adminLogin(formData);
            return response.data;
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const teacherLogin = createAsyncThunk(
    "Auth/teacherLoginReq",
    async (formData, { rejectWithValue }) => {
        try {
            console.log("inside adminLogin")
            const response = await AuthApi.teacherLogin(formData);
            return response.data;
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

