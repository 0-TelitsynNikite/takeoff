import './UserItem.css'

export default function UserItem({name, email}) {
    return (
        <li className="list-item">
            <h2 className="list-item__title">{name}</h2>
            <span className="list-item__span">{email}</span>
        </li>
    )
}