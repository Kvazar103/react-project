import {axiosService} from "./axios.service";
import {urls} from "../config";

const commentPostService={
    getCommentsPost:(id)=>axiosService.get(urls.commentPosts+id)
}

export {
    commentPostService
}