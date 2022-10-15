import {combineReducers} from "redux";
import {commentReduce, postReduce, userReduce} from "../reducers";

let reducer=combineReducers({
    userReduce,
    postReduce,
    commentReduce
})
export {
    reducer
}