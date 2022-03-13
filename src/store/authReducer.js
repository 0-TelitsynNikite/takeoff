const defaultState = {
    authorized: false
}

const AUTH = 'AUTH/AUTHORIZED'

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH: 
            return {...state, authorized: !state.authorized}
        default: 
            return state
    }
} 

export const getAuth = payload => ({type: AUTH, payload})