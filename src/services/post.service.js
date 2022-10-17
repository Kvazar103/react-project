import {axiosService} from "./axios.service";
import {urls} from "../configs";

const postService={
    getAllPosts:()=>axiosService(urls.posts)
}
export {
    postService
}