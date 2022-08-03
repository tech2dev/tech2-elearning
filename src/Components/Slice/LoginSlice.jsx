import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



// First, create the thunk
export const LoginAction = createAsyncThunk(
    'users/login',
    async (payload) => {
        const response = await fetch("http://localhost:3001/UserDemo");

        let users = await response.json();
        let arr = [];

        for (let i in users) {
            arr.push(users[i]);
        }

        const userData = arr.filter(user => {
            return user.userName === payload.userName && user.password === payload.password
        })

        if (userData.length > 0) {
            localStorage.setItem('demo-login', JSON.stringify(userData[0]));
        }

        return userData[0];
    }
)


const LoginSlice = createSlice({
    name: "login",
    initialState: {
        currentUser: localStorage.getItem('demo-login') || {}
    },
    extraReducers: {
        [LoginAction.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        }
    }
})



export default LoginSlice.reducer