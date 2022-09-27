import {axiosService} from "./axios.service";
import {urls} from "../configs";

const commentsService={
    getComments:()=>axiosService.get(urls.comments)
}

export {
    commentsService
}