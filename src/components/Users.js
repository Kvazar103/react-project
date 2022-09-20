import {useEffect, useState} from "react";
import User from "./User";
import {getUserPosts, getUsersAxios} from "./UserAxios";


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
    const liftPost=(obj)=>{
        setPosts(obj)
    }

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(value => value.json())
    //         .then(value => {
    //             setUsers(value)
    //         })
    // },[])
    useEffect(()=>{
        getUsersAxios().then(value => setUsers(value.data))
    },[])
    useEffect(()=>{
        getUserPosts(id).then(value => setPosts(value.data))
    },[id])

    return(<div>
        {JSON.stringify(posts)}
        {users.map((users ,index)=>(<User users={users} key={index} lift={lift} idLift={idLift}/>))}
    </div>)
}