import {createStore} from "redux";
import {reducer} from "./combine";


let store=createStore(reducer)

export {
    store
}