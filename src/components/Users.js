import {useEffect, useState} from "react";
import User from "./User";


export default function Users(){

    let [users,setUsers]=useState([])
    let [user,setUser]=useState(null)

    const info = (obj) => {
        setUser(obj)
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            })
    },[]);

    return (<div>
        <p>{JSON.stringify(user)}</p>
        {users.map((value,index)=>(<User item={value} key={index} info={info}/>))}
    </div>)

}