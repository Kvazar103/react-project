
export default function User(props){
    let {users,idLift}= props

    return(<div>
        {users.name}
        <button onClick={()=>{
            idLift(users.id)
        }}>details</button>
    </div>)
}