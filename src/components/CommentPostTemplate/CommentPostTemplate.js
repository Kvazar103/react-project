
export function CommentPostTemplate(props){
    let {commentPost}=props

    return(<div>
        <hr/>
        postId: {commentPost.postId}<br/>
        id: {commentPost.id}<br/>
        name: {commentPost.name}<br/>
        email: {commentPost.email}<br/>
        body: {commentPost.body}

        <hr/>
    </div>)
}