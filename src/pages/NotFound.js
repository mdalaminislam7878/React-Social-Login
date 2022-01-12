import { Link } from "react-router-dom";

const NotFound = () => {
    const path = "https://mdalaminislam7878.github.io/React-Social-Login";
    return ( 
        <div className="not-found">
            <h1>404! Not Found</h1>
            Back to <Link to={ path }>Home</Link>
        </div>
     );
}
 
export default NotFound;