import { Link } from "react-router-dom";

const Card = ({ post }) => {
    return (  
        <div className="card">
            <Link to={`post/${post.id}`}>
                <h3 className="card-title">{ post.title }</h3>
                <img className="card-image" src={ post.img } alt="" />
                <p className="card-desc">{ post.desc }</p>
                <button className="card-button">Read More</button>
            </Link>
        </div>
    );
}
 
export default Card;