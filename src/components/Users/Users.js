import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


import {loadUsers} from "../../index";
import {usersService} from "../../services";
import {User} from "../User/User";

export function Users() {

    let state=useSelector(state=>state.userReduce)
    console.log(state.users)
    let dispatch=useDispatch();

    useEffect(()=>{
        usersService.getUsers().then(value => {
            dispatch(loadUsers(value.data))
        })
    },[])




    return (
        <div>
            {state.users.map(user=><User user={user} key={user.id}/>)}
        </div>
    );
}


