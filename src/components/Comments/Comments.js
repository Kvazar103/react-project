import {useEffect, useState} from "react";

import {commentsService} from "../../services";
import {baseURL} from "../../configs";
import {Comment} from "../Comment/Comment";
import {CommentForm} from "../CommentForm/CommentForm";


export function Comments(){

    let[comment,setComment]=useState([])

    useEffect(()=>{
        commentsService.getComments(baseURL).then(value => setComment(value.data.splice(0,10)))
    },[])

    return(<div>
        {<CommentForm setComment={setComment}/>}
        {comment.map(comment=>(<Comment comment={comment} key={comment.id}/>))}
    </div>)
}