import {axiosService} from "./axios.service";
import {urls} from "../config";

const commentsService= {
   getAllComments:()=> axiosService.get(urls.comments)
}

export {
    commentsService
}