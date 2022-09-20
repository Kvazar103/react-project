import {useEffect, useState} from "react";
import User from "./User";
import {getUserPosts, getUsersAxios} from "./UserAxios";
import Post from "./Post";

export function Users(){

    let [id,setId]=useState(null)
    let [user,setUser]=useState(null)
    let [users,setUsers]=useState([])
    let [posts,setPosts]=useState([])

    const idLift=(id)=>{
        setId(id)
    }
    const lift = (obj) => {
      setUser(obj)
    }

    useEffect(()=>{
        getUsersAxios().then(value => setUsers(value.data))
    },[])
    useEffect(()=>{
        getUserPosts(id).then(value => setPosts(value.data))
    },[id])

    return(<div>
        {users.map((users ,index)=>(<User users={users} key={index} lift={lift} idLift={idLift}/>))}
        {posts.map((posts,index)=>(<Post posts={posts} key={index}/>))}
    </div>)
}