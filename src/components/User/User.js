import {useDispatch} from "react-redux";
import {userActions} from "../../redux/slices";


const User = ({user}) => {

    const dispatch=useDispatch()

    return(<div>
       {user.name}
        <button onClick={()=>dispatch(userActions.setCurrentUser(user))}>click</button>
        <button onClick={()=>dispatch(userActions.deleteById(user.id))}>delete</button>

    </div>)
}
export {
    User
}