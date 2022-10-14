import {axiosService} from "./axios.service";
import {urls} from "../config";

const commentsService={
    getComments:()=>axiosService(urls.comments)
}
export {
    commentsService
}