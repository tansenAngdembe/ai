// This is global components where all the components/children-comp can access  any data.
// Basically this is the global data store.
import { createContext, useContext, useState, useReducer } from "react";
import reducer from "./Reducer.jsx"

import audioFileplay from "../assets/better-day.mp3"
const AiContext = createContext()

const initalState = {
    text: '',
    count: 0,
    mode: true,
    user_data: [],
    assets:[]
}


const AiProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initalState);
    return (
        <AiContext.Provider value={{ ...state, dispatch }}
        >{children}</AiContext.Provider>
    )
}

//createing custom hook provider for children
const useProvider = () => {
    return useContext(AiContext)
}


export { AiProvider, useProvider }


