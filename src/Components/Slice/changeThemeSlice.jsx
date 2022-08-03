import { createSlice } from '@reduxjs/toolkit'

export const changeThemeSlice = createSlice({
    name: 'theme',
    initialState: {
        toDark: false
    },
    reducers: {
        changeToDark: (state, action) => {
            state.toDark = true
        },
        changeToLight: (state, action) => {
            state.toDark = false
        }
    },
})
export const { changeToDark, changeToLight } = changeThemeSlice.actions

export default changeThemeSlice.reducer
