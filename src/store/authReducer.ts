interface UserState {
    authorized: boolean
}

interface UserAction {
    type: string;
    payload?: any
}

const defaultState: UserState = {
    authorized: false
}

const AUTH = 'AUTH/AUTHORIZED'

export const authReducer = (state = defaultState, action: UserAction): UserState => {
    switch (action.type) {
        case AUTH:
            return { ...state, authorized: true }
        default:
            return state
    }
}

export const getAuth = payload => ({ type: AUTH, payload })