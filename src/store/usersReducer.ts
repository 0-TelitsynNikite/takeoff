const GET_USERS = 'GET_USERS'

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
        return {...state, users: [...state.users, ...action.payload]}
      default:
        return state
    }
}

export const getUsers = payload => ({type: GET_USERS, payload})