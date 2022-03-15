import UserList from './components/UserList/UserList'
import AuthForm from './components/AuthForm/AuthForm';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from './asyncActions/fetchUsers';
import { useDispatch } from 'react-redux';

export default function App() {
  const auth = useSelector(state => state.auth.authorized)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">
      {auth
        ? <UserList/>
        : <AuthForm/>
      }
    </div>
  );
}