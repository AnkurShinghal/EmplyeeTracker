import React, {createContext, useReducer} from "react";
import { SignInReducer } from "../reducers/authReducers";

export const SignInContextProvider = (props)=>{

    export const SignInContext = createContext()

    const[signedIn,dispatchSignedIn] = useReducer(SignInReducer,{
        userToken:null,
    })
    
    return(
        <SignInContext.Provider value = {{signedIn,dispatchSignedIn}}>
            {props.children}
        </SignInContext.Provider>
    )
    
    }
