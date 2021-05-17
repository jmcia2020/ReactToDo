import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';
import Login from './auth/Login';

export default function NavLogin(props) {

    return (
        <li className="ml-auto">
          <Login />
        </li>
    )
} 