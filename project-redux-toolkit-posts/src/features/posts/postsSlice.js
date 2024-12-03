import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, addPost, deletePost } from "../../network/postsApis";
export const postsSlice = createSlice({
    name:'posts',
    initialState:{
        posts:[],
        status:'idle',
        error:null,
        loading:false
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchPosts.fulfilled , (state,action)=>{
            state.status ="succeed",
            state.posts = action.payload
        })
        .addCase(addPost.fulfilled , (state,action)=>{
            state.posts.push(action.payload)
        })
        .addCase(deletePost.fulfilled , (state,action)=>{
            console.log('fullfilled called' , action.payload);
            state.posts = state.posts.filter((post) => post.id !== action.payload.postId);
        })
    }
})

export default postsSlice.reducer