import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {postService} from "../../services";
import {postActions} from "../../redux/slices";
import {Post} from "../Post/Post";


const Posts = () => {

    const dispatch=useDispatch()
    const {posts}=useSelector(state => state.postReducer)
    const {currentPost}=useSelector(state => state.postReducer)

    useEffect(()=>{
        postService.getAllPosts().then(({data})=>{
            dispatch(postActions.getAll(data))
        })
    },[])

    return(<div>
        <hr/>
        {currentPost&&currentPost.body||'click to show body of post'}
        <hr/>
        {posts.map(post=><Post key={post.id} post={post}/>)}
    </div>)
}

export {
    Posts
}