import {useEffect, useState} from "react";
import User from "./User";
import {getUserPosts, getUsersAxios} from "./UserAxios";
import Post from "./Post";

export function Users(){

    let [id,setId]=useState(null)
    let [users,setUsers]=useState([])
    let [posts,setPosts]=useState([])

    const idLift=(id)=>{
        setId(id)
    }

    useEffect(()=>{
        getUsersAxios().then(value => setUsers(value.data))
    },[])
    useEffect(()=>{
        getUserPosts(id).then(value => setPosts(value.data))
    },[id])

    return(<div>
        {users.map((users ,index)=>(<User users={users} key={index} idLift={idLift}/>))}
        {posts.map((posts,index)=>(<Post posts={posts} key={index}/>))}
    </div>)
}