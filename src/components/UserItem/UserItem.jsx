import { useDispatch, useSelector } from 'react-redux'
import { delUser, changeUser } from '../../store/actions'
import Button from '../UI/Button/Button'
import './UserItem.css'

export default function UserItem({ id, name, email }) {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)

    const changeList = (e) => {
        let arr = users.map((item, i, arr) => {
            if (item.id === +e.target.getAttribute('data-id')) {
                item.name = prompt('Name')
                item.email = prompt('Email')
            }
            return item
        })

        dispatch(changeUser(arr))
    }

    return (
        < li className="list-item" >
            <div className="list-item-wrapper">
                <h2 className="list-item__title">{name}</h2>
                <span className="list-item__span">{email}</span>
            </div>
            <div className="button-wrapper">
                <Button data-id={id} onClick={(e) => changeList(e)}>Change</Button>
                <Button onClick={() => dispatch(delUser(id))}>Del</Button>
            </div>
        </li >
    )
}