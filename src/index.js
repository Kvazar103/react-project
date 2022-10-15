import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {reducer, store} from "./redux/store";


export const loadUsers = (payload)=> {
    return {type :"USERS",payload}
}
export const loadPosts = (payload) => {
  return {type:"POSTS",payload}
}
export const loadComments = (payload) => {
  return{type:"COMMENTS",payload}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

);

reportWebVitals();
