import {useEffect, useState} from "react";

import {userService} from "../../services/user.serivce";
import {postService} from "../../services/post.service";
import {User} from "../User/User";
import {Post} from "../Post/Post";


export function Users() {

    let [users,setUsers]=useState([])
    let [posts,setPost]=useState([])
    let [id,setId]=useState(null)

    const lift=(id)=>{
        setId(id)
    }

    useEffect(()=>{
        userService.getAllUsers().then(value => {setUsers(value.data)})
    },[])
    useEffect(()=>{
        postService.getPost(id).then(value => {setPost(value.data)})
    },[id])

    return(<div>
        {
            users.map(user=><User key={user.id} user={user} lift={lift}/>)

        }
        {
            posts.map(post=><Post key={post.id} post={post}/>)
        }
    </div>)
}