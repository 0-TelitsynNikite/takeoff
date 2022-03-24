import { GET_USERS, DELETE_USER, ADD_USER, CHANGE_USER } from "./types"

interface UserState {
  users: any[]
}

interface UserAction {
  type: string;
  payload: any[];
}

const defaultState: UserState = {
  users: []
}

export const usersReducer = (state = defaultState, action: UserAction) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: [...state.users, ...action.payload] }
    case DELETE_USER:
      return { ...state, users: [...state.users.filter(item => item.id !== action.payload)] }
    case ADD_USER:
      return { ...state, users: [...state.users.concat(action.payload)] }
    case CHANGE_USER:
      return { ...state, users: [...action.payload] }
    default:
      return state
  }
}