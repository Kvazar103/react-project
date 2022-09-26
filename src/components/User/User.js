export function User(props){
    let {user,lift}=props

    return(<div>
        <div>{user.name}</div>
        <button onClick={()=>{
            lift(user.id)
        }}>Click</button>
    </div>)
}