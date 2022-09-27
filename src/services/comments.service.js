import {AxiosService} from "./axios.service";
import {urls} from "../configs";

const commentsService={
    getComments:()=>AxiosService.get(urls.comments)
}

export {
    commentsService
}