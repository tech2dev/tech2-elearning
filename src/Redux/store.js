import { configureStore } from '@reduxjs/toolkit';
import bookmarkSlice from '../Components/Slice/BookmarkSlice';
import changeThemeSlice from '../Components/Slice/changeThemeSlice';
import modalVideoSlice from '../Components/Slice/modalVideoSlice';


const rootReducer = {
    changeTheme: changeThemeSlice,
    modalVideo: modalVideoSlice,
    bookmark: bookmarkSlice
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;