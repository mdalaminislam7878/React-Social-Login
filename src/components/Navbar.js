import { Link } from "react-router-dom";
import { backendServer } from "../Site";
const Navbar = ({ user }) => {
    const logout = () => {
        window.open(`${ backendServer }/auth/logout`, '_self')
    }
    return ( 
        <nav className="navbar">
            <h1 className="logo"><Link to="/">LogIn System</Link></h1>
            { user ? (
                <ul className="top-menu">
                    <li>
                        <img className="profile" src={ user.photos[0].value } alt="" />
                    </li>
                    <li>{ user.displayName }</li>
                    <li onClick={ logout }>Logout</li>
                </ul>
            ) : (
                <Link to="login">Login</Link>
            )}
        </nav>
    );
}
 
export default Navbar;