import axios from "axios";

let userAxios=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/users',
    headers:{'Content-Type': 'application/json'}
})
const getUsersAxios = () => {
    return userAxios.get()
}
const getUserAxios=(f)=>{
    return userAxios.get('/'+f)
}
const getUserPosts=(id)=>{
    return userAxios.get('/'+id+'/posts')
}
export {getUserAxios,getUsersAxios,getUserPosts}

