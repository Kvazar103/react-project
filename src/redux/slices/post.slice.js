import {createSlice} from "@reduxjs/toolkit";


const initialState={
    posts:[],
    currentPost:null,
}

const postSlice=createSlice({
    name:'postSlice',
    initialState,
    reducers:{
        getAll:(state,action)=>{
            state.posts=action.payload
        },
        setCurrentPost:(state,action)=>{
            state.currentPost=action.payload
        },
        deleteById:(state,action)=>{
            const index=state.posts.findIndex(post=>post.id===action.payload)
            state.posts.splice(index,1)
        }
    }
})

const {reducer:postReducer,actions:{getAll,setCurrentPost,deleteById}}=postSlice

const postActions={
    getAll,
    setCurrentPost,
    deleteById
}

export {
    postReducer,
    postActions
}