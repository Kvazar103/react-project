
const userReduce = (state={users:[]},action) => {
    switch (action.type){
        case "USERS":
            return {...state,users:action.payload};
        default:
            return state;
    }
}
export {
    userReduce
}