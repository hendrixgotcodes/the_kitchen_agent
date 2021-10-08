import { createContext } from "react";

export let user = null

export const UserContext = createContext({
    user,
    setUser : (newUser)=>{
        user = newUser
    }
})