import { combineReducers } from "@reduxjs/toolkit"
import user from "./features/user"

const primaryReducer = combineReducers({
    user,
})

export default primaryReducer