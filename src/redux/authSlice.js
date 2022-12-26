import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null,
        isFetching : false,
        isError: false,
        isSuccess: false,
        isStatus : false,
        message: ''
    },
    reducers: {
        resetState: (state) =>{
            state.currentUser = null;
            state.isFetching = false
            state.isError = false
            state.isSuccess = false
            state.isStatus = false;
            state.message = ""

        },
        registerStart: (state)=>{
            state.isFetching = true;
            state.isError = false;
        },
        registerSuccess: (state, action) =>{
            state.isFetching = true;
            state.isSuccess = true;
            state.currentUser = action.payload;
            state.message = action.payload;
        },
        registerFailure: (state) =>{
            state.isFetching = false;
            state.isError = true;
        },
        loginStart: (state)=>{
            state.isFetching = true;
            state.isError = false;
        },
        loginSuccess: (state, action) =>{
            state.isFetching = true;
            state.isSuccess = true;
            state.isStatus = true;
            state.currentUser = action.payload;
            state.message = action.payload.message;
        },
        loginNotActive: (state, action) =>{
            state.isFetching = true;
            state.isStatus = false;
            state.isSuccess = true;
            state.currentUser = action.payload;
            state.message = "Account is still pending...";
        },
        loginFailure: (state) =>{
            state.isSuccess = false;
            state.isFetching = false;
            state.isError = true;
            state.message = "Wrong Username or Password!";

        }, 
        logOut: (state) =>{
            state.currentUser = null;
        },
    }

})

export const {registerStart, registerSuccess, registerFailure, resetState, loginStart, loginSuccess,loginNotActive, loginFailure, logOut } = authSlice.actions;
export default authSlice.reducer