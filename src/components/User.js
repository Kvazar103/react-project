
export default function User(props){
    let {users,lift,liftPost,posts,idLift}= props

    return(<div>
        {users.name}
        <button onClick={()=>{
            idLift(users.id)
        }}>details</button>
    </div>)
}