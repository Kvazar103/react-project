import {axiosService} from "./axios.service";
import {urls} from "../config";


const todosService={
    getAllTodos:()=>axiosService.get(urls.todos)
}
export {
    todosService
}