import logo  from "../assets/ailadybg.png"
import {NavLink} from "react-router-dom"
export const Navbar = () => {
    return (
        <div className="navlist">
            <div>
                <span>
                    <NavLink to="/">
                        <img className="logo" src={logo} alt="logo" />
                    </NavLink>
                </span>
            </div>
            <nav>
                <NavLink to="/models">Models</NavLink>
                <NavLink to="/voicelab">Voice Lab</NavLink>
                <NavLink to="/asset">Asset</NavLink>
                <NavLink to="">Login</NavLink>
            </nav>

        </div>
    )
}