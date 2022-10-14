import {axiosService} from "./axios.service";
import {urls} from "../config";


const postsService={
    getPosts:()=>axiosService.get(urls.posts)
}
export {
    postsService
}