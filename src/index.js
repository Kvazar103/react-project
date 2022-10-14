import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {BrowserRouter} from "react-router-dom";

const userReduce = (state={users:[]},action) => {
    switch (action.type){
        case "USERS":
            return {...state,users:action.payload};
        default:
            return state;
    }
}
const postReduce=(state={posts: []},action)=>{
    switch (action.type){
        case "POSTS":
            return{...state,posts:action.payload}
        default:
            return state;
    }
}
const commentReduce = (state={comments:[]},action) => {
  switch (action.type) {
      case "COMMENTS":
          return{...state,comments: action.payload}
      default:
          return state;
  }
}

export const loadUsers = (payload)=> {
    return {type :"USERS",payload}
}
export const loadPosts = (payload) => {
  return {type:"POSTS",payload}
}
export const loadComments = (payload) => {
  return{type:"COMMENTS",payload}
}

let reducer=combineReducers({
    userReduce,
    postReduce,
    commentReduce
})
let store=createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

);

reportWebVitals();
