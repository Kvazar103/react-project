import {useDispatch, useSelector} from "react-redux";

import {useEffect} from "react";
import {userActions} from "../../redux/slices";
import {User} from "../User/User";
import {userService} from "../../services";

const Users = () => {

    const dispatch=useDispatch()
    const {users}=useSelector(state => state.userReducer)
    useEffect(()=>{
        userService.getAllUsers().then(({data})=>{
            dispatch(userActions.getAll(data))
        })

    },[])



    return(<div>
        <hr/>
        {users.map(user=><User key={user.id} user={user}/>)}
    </div>)
}
export {
    Users
}