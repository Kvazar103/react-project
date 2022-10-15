

const postReduce=(state={posts: []},action)=>{
    switch (action.type){
        case "POSTS":
            return{...state,posts:action.payload}
        default:
            return state;
    }
}

export {
    postReduce
}