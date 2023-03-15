import { SET_MOVIES,SET_MOVIE} from "./actionType";
const reducer = (state, action) => {
    switch (action.type) {
    
        case SET_MOVIES:
            console.log(action);
            return {

                ...state,
                movies: action.movies
            }
        case SET_MOVIE:
            console.log(action);
            return {

                ...state,
                movie: action.movie
            }

        default:
            return state
    }
}
export default reducer;