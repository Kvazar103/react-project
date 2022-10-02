import {axiosService} from "./axios.service";
import {urls} from "../config";


const albumsService={
    getAllAlbums:()=>axiosService(urls.albums)
}
export {
    albumsService
}