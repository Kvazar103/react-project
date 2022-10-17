import {useDispatch} from "react-redux";
import {postActions} from "../../redux/slices";


const Post = ({post}) => {

    const dispatch=useDispatch()


    return(<div>
      id:  {post.id}<br/>
        title: {post.title}<br/>
        body: {post.body}
        <button onClick={()=>dispatch(postActions.setCurrentPost(post))}>click</button>
        <button onClick={()=>dispatch(postActions.deleteById(post.id))}>delete</button>
    </div>)
}

export {
    Post
}