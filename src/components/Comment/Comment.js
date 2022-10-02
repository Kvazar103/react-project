import {Link} from "react-router-dom";


export function Comment(props){
    let {comment}=props

    return(<div>
        <hr/>
        postId: {comment.postId}<br/>
        id: {comment.id}<br/>
        name: {comment.name}<br/>
        email: {comment.email}<br/>
        body: {comment.body}<br/>
<Link to={'/comments/commentsPost'} state={{...comment}}>posts</Link>
        <hr/>
    </div>)
}