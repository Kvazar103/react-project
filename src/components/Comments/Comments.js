import {useEffect, useState} from "react";

import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";


export function Comments(){

   let [comments,setComments]=useState([])

    useEffect(()=>{
        commentsService.getAllComments().then(value => {
            setComments(value.data)
        })
    },[])

    return(<div>
        <hr/>
        Comments
        <hr/>
        {comments.map(comment=><Comment comment={comment} key={comment.id}/>)}
    </div>)
}