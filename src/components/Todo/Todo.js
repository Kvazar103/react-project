
export function Todo(props) {
    let {todo}= props

    return(<div>
        <hr/>
        userId:{todo.userId}<br/>
        id:{todo.id}<br/>
      title: {todo.title}<br/>
        completed: {`${todo.completed}`}
        <hr/>
    </div>)

}