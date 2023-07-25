import { NavLink } from "react-router-dom";

function Header(){
    return <div className="header">
        <h1>Router</h1>

        <ul>
            <li> <NavLink to="/"> Home </NavLink></li>
            <li> <NavLink to="/feature"> Feature </NavLink></li>
            <li><NavLink to="/about"> About </NavLink></li>
            <li><NavLink to="/blogs"> Blogs </NavLink></li>
        </ul>
    </div>
}

export default Header;