import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// fetch posts
export const fetchPosts= createAsyncThunk('Posts/fetchPosts', async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
})
export const addPost= createAsyncThunk('Posts/addPost', async(postInfo)=>{
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts',postInfo)
    return response.data
})
export const deletePost= createAsyncThunk('Posts/deletePost', async(postId)=>{
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    return {res:response.data, postId:postId}
})