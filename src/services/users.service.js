import {axiosService} from "./axios.service";
import {urls} from "../config";

const usersService={
    getUsers:()=>axiosService.get(urls.users)
}

export {
    usersService
}