import Input from "../Input/Input";
import Button from "../Button/Button";
import './Modal.css'
import { addUser } from "../../../store/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Modal = ({ changeStateOfModal }) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        const id = Date.now()

        if (name || email) {
            dispatch(addUser({ id, name, email }))
            changeStateOfModal()
        }

    }

    return (
        <form className="form">
            <Input onChange={e => setName(e.target.value)} type="text" placeholder={'Name'} />
            <Input onChange={e => setEmail(e.target.value)} type="email" placeholder={'Email'} />
            <Button onClick={(e) => handleSubmit(e)} style={{ background: '#ffffff', color: '#333' }}>Add</Button>
        </form>
    )
}

export default Modal;