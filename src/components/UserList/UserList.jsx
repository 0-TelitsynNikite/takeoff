import { useSelector } from "react-redux"
import { useState } from "react"
import UserItem from "../UserItem/UserItem"
import Button from "../UI/Button/Button"
import Modal from "../UI/Modal/Modal"
import { addUser } from "../../store/actions"
import './UserList.css'

export default function UserList() {
    const users = useSelector(state => state.users.users)
    const [modal, setModal] = useState(false)


    const changeStateOfModal = () => {
        setModal(!modal)
    }

    return (
        <div className="list-container">
            <h1 className="title">Список пользователей</h1>

            {modal
                ? <Modal modal={modal} setModal={setModal} action={addUser} changeStateOfModal={changeStateOfModal} />
                : <></>
            }

            <Button onClick={() => setModal(!modal)}>Add user</Button>
            <ul className="list">
                {users.length
                    ? users.map(user => <UserItem key={user.id} id={user.id} name={user.name} email={user.email} />)
                    : <div>Have no data :(</div>
                }
            </ul>
        </div>
    )
}

