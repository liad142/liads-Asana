import './navbar.css'
import Temple from '../assets/temple.svg'
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={'navbar'}>
            <ul>
                <li className="logo">
                    <img src={Temple} alt={'liad asana logo'}/>
                    <span>Liad`s Asana</span>
                </li>

                <li>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/signup'}>Sign up</Link>
                </li>
                <li className={'btn'}>Logout</li>
            </ul>

        </div>
    );
};

export default NavBar;
