import { createSlice } from '@reduxjs/toolkit'
import { studentLogin } from './authAction.js'

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    user: {
      student: {
        usertype: '',
      }
    },
    loading : false,
    error: null,
  },
  reducers: {
      
  },
  
  extraReducers: (builder)=>{
   
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(studentLogin.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
      })
    

    // [studentLogin.pending]: (state) => {
    //   state.loading = true
    // },

    // [studentLogin.fulfilled]: (state, action) => {
    //   state.user = action.payload
    //   state.loading = false
    // },

    // [studentLogin.rejected]: (state, action) => {
    //   state.loading = false
    //   state.error = action.error.message
    // }
  }
})

// Action creators are generated for each case reducer function
export const { studentLoginReq} = AuthSlice.actions

export default AuthSlice.reducer