import { SET_MOVIES,SET_MOVIE} from "./actionType";
const reducer = (state, action) => {
    switch (action.type) {
    
        case SET_MOVIES:
            return {

                ...state,
                movies: action.movies
            }
        case SET_MOVIE:
            return {

                ...state,
                movie: action.movie
            }

        default:
            return state
    }
}
export default reducer;