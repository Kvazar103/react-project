import {useEffect, useState} from "react";

import {baseURL} from "../../configs";
import {User} from "../User/User";
import {UserForm} from "../UserForm/UserForm";
import {userService} from "../../services";

export function Users(){

   let [users,setUsers]=useState([])

    useEffect(()=>{
       userService.getUsers(baseURL).then(value => {setUsers(value.data)})
    },[])

   return(<div>
       {<UserForm setUsers={setUsers} key={setUsers}/>}
      {users.map(user => (<User user={user} key={user.id}/>))}
   </div>)
}