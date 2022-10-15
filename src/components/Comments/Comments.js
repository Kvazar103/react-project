import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {commentsService} from "../../services";
import {loadComments} from "../../index";
import {Comment} from "../Comment/Comment";


export function Comments(){

    let state=useSelector(state=>state.commentReduce)
    let dispatch=useDispatch()

    useEffect(()=>{
        commentsService.getComments().then(value => {
            dispatch(loadComments(value.data))
        })
    },[])

    return(<div>
        {state.comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
    </div>)
}