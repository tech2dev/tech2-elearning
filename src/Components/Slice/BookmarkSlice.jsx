import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';



export const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState: {
        bookmark: localStorage.getItem('demo-login') ? JSON.parse(localStorage.getItem('demo-login')).bookmark : [],
    },
    reducers: {
        addToBookmark: (state, action) => {

            const newItem = action.payload;
            const index = state.bookmark.findIndex(x => x.id === newItem.id)

            if (index === -1) {
                state.bookmark.push(newItem);
            }
            toast.success(`Add item to bookmark`, {
                position: "top-left",
                theme: 'colored',
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        },
        removeBookmark: (state, action) => {
            const newItem = action.payload;

            const filterItem = state.bookmark.filter(item => item.id !== newItem.id);

            state.bookmark = filterItem;
            toast.error(`Remove item from bookmark`, {
                position: "top-left",
                theme: 'colored',
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    },
})
export const { addToBookmark, removeBookmark } = bookmarkSlice.actions

export default bookmarkSlice.reducer
