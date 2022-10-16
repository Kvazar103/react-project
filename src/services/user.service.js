import {axiosService} from "./axios.service";
import {urls} from "../configs";


const userService={
    getAllUsers:()=>axiosService.get(urls.users)
}

export {
    userService
}