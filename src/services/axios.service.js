import {baseURL} from "../configs";

import axios from "axios";

const AxiosService=axios.create({baseURL})

export {
    AxiosService
}