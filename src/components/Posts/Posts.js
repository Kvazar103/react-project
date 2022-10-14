import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {postsService} from "../../services/posts.service";
import {loadPosts} from "../../index";
import {Post} from "../Post/Post";


export function Posts(){

    let state=useSelector(state=>state.postReduce)
    let dispatch=useDispatch()

    useEffect(()=>{
        postsService.getPosts().then(value => {
            dispatch(loadPosts(value.data))
        })
    },[])

    return(<div>
        {state.posts.map(post=><Post key={post.id} post={post}/>)}
    </div>)
}