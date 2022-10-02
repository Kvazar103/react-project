import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {commentPostService} from "../../services/commentpost.service";
import {CommentPostTemplate} from "../CommentPostTemplate/CommentPostTemplate";


export function CommentPost(){

let {state}=useLocation()
    console.log(state)
    let {postId}=state
    console.log(postId)

    let [commentsPost,setCommentPost]=useState([])

    useEffect(()=>{
        commentPostService.getCommentsPost(postId).then(({data}) => {
            console.log(data)
            setCommentPost(data)
        })
    },[])

    return(<div>
        Comment Post
        {commentsPost.map(commentPost => (<CommentPostTemplate commentPost={commentPost} key={commentPost.id}/>))}
    </div>)
}