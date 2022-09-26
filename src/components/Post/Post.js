import './ForPost.css'

export function Post(props){
    let {post}=props

    return(<div className={'ForPost'}>
        <h2>post id ---- {post.id}</h2><br/>
        <div>{post.body}</div>

    </div>)
}