

export const Comment = (props) => {
  let {comment}=props

    return(<div>
      <hr/>
    postId: {comment.postId}<br/>
    id:  {comment.id}<br/>
    name:  {comment.name}<br/>
    email:  {comment.email}<br/>
    body:  {comment.body}
      <hr/>
    </div>)
}