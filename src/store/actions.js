import { GET_USERS, DELETE_USER, CHANGE_USER, ADD_USER } from "./types"

export const getUsers = payload => ({ type: GET_USERS, payload })
export const delUser = payload => ({ type: DELETE_USER, payload })
export const changeUser = payload => ({ type: CHANGE_USER, payload })
export const addUser = payload => ({ type: ADD_USER, payload })