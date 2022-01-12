import { Link } from "react-router-dom";
const Navbar = ({ user }) => {
    const path = "React-Social-Login";
    const logout = () => {
        window.open('http://localhost:5000/auth/logout', '_self')
    }
    return ( 
        <nav className="navbar">
            <h1 className="logo"><Link to={ path }>LogIn System</Link></h1>
            { user ? (
                <ul className="top-menu">
                    <li>
                        <img className="profile" src={ user.photos[0].value } alt="" />
                    </li>
                    <li>{ user.displayName }</li>
                    <li onClick={ logout }>Logout</li>
                </ul>
            ) : (
                <Link to={`${path}/login`}>Login</Link>
            )}
        </nav>
    );
}
 
export default Navbar;