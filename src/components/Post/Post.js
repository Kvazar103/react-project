
export const Post = (props) => {
  let {post}=props

    return(<div>
      <hr/>
      userId: {post.userId}<br/>
      id: {post.id}<br/>
     title: {post.title}<br/>
     body: {post.body}
        <hr/>
    </div>)
}