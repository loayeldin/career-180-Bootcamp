import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import postsSlice from "../features/posts/postsSlice";

export default configureStore({
    reducer:{
        counterData:counterSlice,
        postsData:postsSlice
    }
})