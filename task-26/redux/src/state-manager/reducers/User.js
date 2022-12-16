const userReducer = (initialState = null, action) => {
    switch(action.type) {
        case "GET_USER":
            return "user is coming"
        default:
            return "no user in queue"
    }
}

export default userReducer