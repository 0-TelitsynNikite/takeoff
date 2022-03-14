import { getUsers } from "../store/usersReducer.ts"

export const fetchUsers = () => {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(getUsers(json)))
    }
}