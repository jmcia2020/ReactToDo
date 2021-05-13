import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

export default function NavLogin(props) {
    //const { user } = props;
    const auth = useAuth();
    console.log(auth);
    const { user } = auth;
    console.log(user);

    if (user) {
        return (
            <li>Hi, {user.username}</li>
        );
    }

    return (
        <>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
        </>
    )
} 