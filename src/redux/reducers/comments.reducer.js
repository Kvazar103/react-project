
const commentReduce = (state={comments:[]},action) => {
    switch (action.type) {
        case "COMMENTS":
            return{...state,comments: action.payload}
        default:
            return state;
    }
}

export {
    commentReduce
}