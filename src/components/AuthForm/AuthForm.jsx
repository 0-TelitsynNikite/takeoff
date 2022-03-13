import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getAuth } from "../../store/authReducer";
import './AuthForm.css'

export default function AuthForm() {
    const dispatch = useDispatch()
    const users = useSelector( state => state.users.users)
    const [textInput, setTextInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        users.filter(item => {
            if (textInput === item.email) {
                dispatch(getAuth(true))
            }
        })
    }

    return (
        <form 
            onSubmit={handleSubmit}
            className="auth-form"
        >
            <h1 className="title">Введите email</h1>
            <input 
                onChange={e => setTextInput(e.target.value)} 
                type="email" 
                placeholder="Email..."
                className="auth-form__input" 
            />
            <button className="auth-form__button">Войти</button>
        </form>
    )
}