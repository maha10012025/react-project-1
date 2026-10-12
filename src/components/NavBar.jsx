import { NavLink } from "react-router-dom";
import Home from "./Home";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-danger" data-bs-theme="dark">
                <div className="container mt-2">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;