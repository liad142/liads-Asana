import {NavLink} from "react-router-dom";
import './sidebar.css'
import dashboardIcon from "../assets/dashboard_icon.svg";
import addIcon from "../assets/add_icon.svg";
import NavBar from "./NavBar";

const SideBar = () => {
    return (
        <div className={'sidebar'}>
            <div className="sidebar-content">
                <div className="user">
                    {/*avatar username*/}
                    <p>Hey user</p>
                </div>
            </div>
            <nav className="links">
                <ul>

                    <li>
                        <NavLink exact to={'/'}>
                            <img src={dashboardIcon} alt={'liad asana dashboard icon'}/>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={'/create'}>
                            <img src={addIcon} alt={'liad asana add project icon'}/>
                            <span>New Project</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default SideBar;
