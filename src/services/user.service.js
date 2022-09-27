import {AxiosService} from "./axios.service";
import {urls} from "../configs";

const userService = {
  getUsers:()=>AxiosService.get(urls.users)
}

export {
    userService
}