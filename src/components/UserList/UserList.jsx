import { useSelector } from "react-redux"
import UserItem from "../UserItem/UserItem"
import './UserList.css'

export default function UserList() {

    const users = useSelector( state => state.users.users)

    return (
        <div className="list-container">
            <h1 className="title">Список пользователей</h1>
            <ul className="list">
                {users.length
                    ? users.map(user => <UserItem key={user.id} name={user.name} email={user.email}/>)
                    : <div>Have no data :(</div>
                }
            </ul>
        </div>
    )
}

