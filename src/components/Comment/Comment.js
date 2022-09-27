import css from './CommentStyle.module.css'

function Comment(props) {
    let {comment}=props

    return(<div className={css.com}>
        name: {comment.name}<br/>
        email: {comment.email}

    </div>)
}
export {
    Comment
}