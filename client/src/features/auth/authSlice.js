import { createSlice } from '@reduxjs/toolkit'
import { studentLogin } from './authAction.js'

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    user: {
      user: {
        usertype: '',
      }
    },
    loading : false,
    error: null,
  },
  reducers: {
    logoutReq: (state, action) => {
      state.user = {
        user: {
          usertype: '',
        }
      }
    }
  },  
  
  extraReducers: (builder)=>{
   
      // Add reducers for additional action types here, and handle loading state as needed

      builder.addCase(studentLogin.pending, (state) => {
        state.loading = true
      })

      builder.addCase(studentLogin.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
      })

      builder.addCase(studentLogin.rejected, (state, action) => {
        state.error = action.error.message
        state.loading = false
      })
  }
})

// Action creators are generated for each case reducer function
export const { studentLoginReq,logoutReq} = AuthSlice.actions

export default AuthSlice.reducer