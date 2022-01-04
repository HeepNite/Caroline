const BlogReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_BLOGS':
            return action.blogs;
        case 'SET_BLOGS':
            return action.blogs;
        default:
            return state;
    }
}
export default BlogReducer;