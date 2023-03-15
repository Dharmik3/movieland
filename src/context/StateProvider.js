import React, { useContext, useReducer } from "react";
import MovieContext from "./Context";
import reducer from "./reducer";
import { initialState } from "./initialState";


export const StateProvider = (props) => {

    return (
        <MovieContext.Provider
            value={useReducer(reducer, initialState)}
        >
            {props.children}
        </MovieContext.Provider>
    );
};

export const useStateValue = () => useContext(MovieContext);